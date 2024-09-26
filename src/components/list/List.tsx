import style from "./List.module.css";

const items = [
  {
    icon: "/Icons.svg",
    title: "Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum.`,
  },
  {
    icon: "/Icons.svg",
    title: "Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum.`,
  },
  {
    icon: "/Icons.svg",
    title: "Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum.`,
  },
  {
    icon: "/Icons.svg",
    title: "Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum.`,
  },
];

const List = ({ styleList }: { styleList: string }) => {
  return (
    <ul className={style[styleList]}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <img src={item.icon} alt="star" />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
