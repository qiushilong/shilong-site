import React, { useCallback, useRef, useEffect, useMemo } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import type { IMenuItem } from "./index";
import Popper from "../popper";
import "./menuPopperUl.scss";
import { getTextWidth } from "@/utils/layout";
import { debounce } from "lodash";

interface IMenuProps {
  menuSel: IMenuItem | undefined;
  menuList: IMenuItem[];
  handleItemClick: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    menuItem: IMenuItem
  ) => void;
  setMenuList: (newMenuList: IMenuItem[]) => void;
}

function menu({ menuSel, menuList, handleItemClick, setMenuList }: IMenuProps) {
  const popperRef = useRef();
  const menuItemStyle = useCallback(
    (menuItem: IMenuItem) =>
      classNames(styles.menuItem, {
        [`${styles.menuItemSel}`]: menuItem.id === menuSel?.id,
      }),
    [menuSel]
  );
  const outerMenuList = useMemo(
    () => menuList.filter((menuItem) => menuItem.outer),
    [menuList]
  );
  const innerMenuList = useMemo(
    () => menuList.filter((menuItem) => !menuItem.outer),
    [menuList]
  );

  useEffect(() => {
    menuDisplayChange();
    window.addEventListener("resize", menuDisplayChange);

    return () => {
      window.removeEventListener("resize", menuDisplayChange);
    };
  }, []);

  const menuDisplayChange = debounce(() => {
    const ul = document.querySelector(`.${styles.menuUl}`)! as HTMLElement;

    let ulLeftWidth = ul.offsetWidth;
    const newMenuList = [...menuList];
    // newMenuList.map((menuItem) =>
    //   console.log(getTextWidth(menuItem.title, 16))
    // );
    const allTextWidth = newMenuList.map(
      (menuItem) => getTextWidth(menuItem.title, 16) + 150
    );
    const totalWidth = allTextWidth.reduce((pre, cur) => pre + cur, 0);
    if (totalWidth > ulLeftWidth) {
      ulLeftWidth -= getTextWidth("...", 16) + 150;
    }
    for (let i = 0; i < newMenuList.length; i++) {
      ulLeftWidth -= allTextWidth[i];
      newMenuList[i].outer = ulLeftWidth > 0;
    }
    setMenuList(newMenuList);
  }, 100);

  return (
    <section className={styles.menu}>
      <ul className={styles.menuUl}>
        {outerMenuList.map((menuItem) => (
          <li
            key={menuItem.title}
            className={menuItemStyle(menuItem)}
            onClick={(e) => handleItemClick(e, menuItem)}
          >
            {menuItem.title}
          </li>
        ))}
        {innerMenuList.length !== 0 && (
          <li className={styles.menuMore}>
            <Popper
              trigger="hover"
              ref={popperRef}
              content={
                <ul className="menu-popper-ul">
                  {innerMenuList.map((menuItem) => (
                    <li
                      key={menuItem.title}
                      className={classNames("menu-popper-item", {
                        sel: menuItem.id === menuSel?.id,
                      })}
                      onClick={(e) => {
                        handleItemClick(e, menuItem);
                        popperRef.current?.close();
                      }}
                    >
                      {menuItem.title}
                    </li>
                  ))}
                </ul>
              }
            >
              <span className={styles.menuMoreDot}>...</span>
            </Popper>
          </li>
        )}
      </ul>
    </section>
  );
}

export default menu;
