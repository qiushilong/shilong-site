"use client";
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import { createPopper } from "@popperjs/core";
import "./index.scss";

interface IPopper {
  children: React.ReactNode;
  content: React.ReactNode;
  position?:
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "right-end"
    | "right"
    | "right-start"
    | "top-start"
    | "top"
    | "top-end"
    | "left-start"
    | "left"
    | "left-end";
  trigger?: "hover" | "click";
}

function popper(
  { children, content, position = "bottom-start", trigger = "hover" }: IPopper,
  ref
) {
  const [show, setShow] = useState(false);
  const popperRef = useRef(null);
  const popperContentRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        close: () => setShow(false),
      };
    },
    []
  );

  useEffect(() => {
    if (popperRef.current && popperContentRef.current) {
      createPopper(popperRef.current, popperContentRef.current, {
        placement: position,
      });
    }
    return () => {
      document.removeEventListener("click", documentClick);
    };
  }, []);

  const documentClick = (e: MouseEvent) => {
    if (e.target !== popperContentRef.current) {
      setShow(false);
      document.removeEventListener("click", documentClick);
    }
  };

  const popperContentMethod = useMemo(() => {
    if (trigger === "hover") {
      return {
        onMouseOver: () => {
          setShow(true);
        },
        onMouseLeave: () => {
          setShow(false);
        },
      };
    } else if (trigger === "click") {
      return {
        onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          setShow(true);
          document.addEventListener("click", documentClick);
        },
      };
    }
  }, [trigger]);

  return (
    <section ref={popperRef} {...popperContentMethod}>
      {children}

      {createPortal(
        <div
          ref={popperContentRef}
          className="c-popper"
          style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? 1 : 0,
          }}
        >
          {content}
        </div>,
        document?.body
      )}
    </section>
  );
}

const Popper = forwardRef((props: IPopper, ref) => popper(props, ref));

export default Popper;
