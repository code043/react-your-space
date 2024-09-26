import style from "./Button.module.css";

const Button = ({
  styleBtn,
  children,
}: {
  styleBtn: string;
  children: React.ReactNode;
}) => {
  return <button className={style[styleBtn]}>{children}</button>;
};

export default Button;
