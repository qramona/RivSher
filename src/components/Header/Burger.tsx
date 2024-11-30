import { Dispatch } from "react";
import style from "./style.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const Burger = ({ isOpen, setIsOpen }: Props) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container} onClick={handleClick}>
      <input type="checkbox" checked={isOpen} id="" />
      <div className={style.hamburger_lines}>
        <span className={`${style.line} ${style.line1}`}></span>
        <span className={`${style.line} ${style.line2}`}></span>
        <span className={`${style.line} ${style.line3}`}></span>
      </div>
    </div>
  );
};
