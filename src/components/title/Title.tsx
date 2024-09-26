import style from "./Title.module.css";

type HeadingProp = {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  styleHeading: string;
};
const Title = ({ tag: Tag = "h1", children, styleHeading }: HeadingProp) => {
  return <Tag className={style[styleHeading]}>{children}</Tag>;
};

export default Title;
