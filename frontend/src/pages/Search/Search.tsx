import style from "./style.module.css";
import curtain from "../../assets/img/curtain.svg";
import iconFrom from "../../assets/img/from.svg";
import iconTo from "../../assets/img/to.svg";
import iconBoat from "../../assets/img/boat.svg";
import iconPassengers from "../../assets/img/passenger.svg";
import iconDate from "../../assets/img/date.svg";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <section>
      <div className={style.search_wrapper}>
        <div className={style.search_map}>
          экран с картой как от точки А дойти до причала
        </div>
        <div className={style.search_form_wrapper}>
          <img src={curtain} alt="Curtain" className={style.curtain} />
          <form action="" className={style.search_form}>
            <div className={style.search_form_input}>
              <img src={iconFrom} alt="Откуда" />
              <input type="text" placeholder="Откуда" className={style.input} />
            </div>
            <div className={style.search_form_input}>
              <img src={iconTo} alt="Куда" className={style.input_icon} />
              <input type="text" placeholder="Куда" className={style.input} />
            </div>
            <div className={style.search_form_input}>
              <img
                src={iconBoat}
                alt="Тип судна"
                className={style.input_icon}
              />
              <input
                type="text"
                placeholder="Тип судна"
                className={style.input}
              />
            </div>
            <div className={style.search_form_input}>
              <img
                src={iconPassengers}
                alt="Количество пассажиров"
                className={style.input_icon}
              />
              <input
                type="text"
                placeholder="Количество пассажиров"
                className={style.input}
              />
            </div>
            <div className={style.search_form_input}>
              <img
                src={iconDate}
                alt="Дата поездки"
                className={style.input_icon}
              />
              <input
                type="text"
                placeholder="Дата поездки"
                className={style.input}
              />
            </div>
            <Link to="/variants">
              <button className={style.search_form_button}>
                Подобрать маршрут
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
