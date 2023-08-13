"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Menu from "./menu";
import Logo from "./logo";
import ThemeToggler from "./themeToggler";

export interface IHeaderProps {}

export interface IMenuItem {
  id: number;
  title: string;
  link: string;
  outer: boolean;
}

function header({}: IHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuSel, setMenuSel] = useState<IMenuItem | undefined>();
  const [menuList, setMenuList] = useState<IMenuItem[]>([
    {
      id: 1,
      title: "Blog",
      link: "/",
      outer: false,
    },
    {
      id: 2,
      title: "AI",
      link: "/ai",
      outer: false,
    },
    {
      id: 3,
      title: "Project",
      link: "/project",
      outer: false,
    },
    // {
    //   id: 4,
    //   title: "4",
    //   link: "/4",
    //   outer: false,
    // },
    // {
    //   id: 5,
    //   title: "5",
    //   link: "/5",
    //   outer: false,
    // },
    // {
    //   id: 6,
    //   title: "6",
    //   link: "/6",
    //   outer: false,
    // },
  ]);

  useEffect(() => {
    menuList.forEach(
      (item) => location.pathname === item.link && setMenuSel(item)
    );

    window.addEventListener("resize", (e) => {
    });
  }, []);

  function handleItemClick(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    menuItem: IMenuItem
  ) {
    setMenuSel(menuItem);
    router.push(menuItem.link);
  }

  return (
    <header
      className={styles.header}
      style={{
        height:
          pathname === "/" ? "var(--banner-height)" : "var(--menu-height)",
      }}
    >
      <section className={styles.mainWrapper}>
        <section className={styles.main}>
          <Logo />
          <Menu
            menuList={menuList}
            handleItemClick={handleItemClick}
            menuSel={menuSel}
            setMenuList={setMenuList}
          />
          <ThemeToggler />
        </section>
      </section>

      <section className={styles.banner}></section>
    </header>
  );
}

export default header;
