import { Link } from "react-router-dom";
import ButtonChoice from "../../components/ButtonChoice";
import style from "./style.module.css";

const Enter = () => {
  return (
    <section>
      <div className="container">
        <div className={style.enter_wrapper}>
          <h1>Кто вы?</h1>
          <div className={style.enter_choice}>
            <Link to="/search">
              <ButtonChoice title="Пассажир" />
            </Link>
            <ButtonChoice title="Капитан" />
            <ButtonChoice title="Водитель" />
          </div>
          <div className={style.enter_login}>
            <a href="#">Вход</a> / <a href="#">Регистрация</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enter;
