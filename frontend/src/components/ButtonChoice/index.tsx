import arrow from "../../assets/img/arrow.svg";
import style from "./style.module.css";

type ButtonType = {
  title: string;
  children?: React.ReactNode;
};

const ButtonChoice = ({ title }: ButtonType) => {
  return (
    <button className={style.button_choice}>
      {title}

      <img src={arrow} className={style.arrow} alt="Перейти" />
    </button>
  );
};

export default ButtonChoice;
