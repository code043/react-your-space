import { useEffect, useRef } from "react";
import style from "./Button.module.css";

const Button = ({
  styleBtn,
  children,
}: {
  styleBtn: string;
  children: React.ReactNode;
}) => {
  const btn = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (btn.current) {
      btn.current.style.backgroundColor = "#8599eb";
      btn.current.style.color = "#fff";
      const timeoutId = setTimeout(() => {
        if (btn.current) {
          btn.current.style.backgroundColor = "#fff";
          btn.current.style.color = "#151515";
        }
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, []);
  return (
    <button ref={btn} className={style[styleBtn]}>
      {children}
    </button>
  );
};

export default Button;
