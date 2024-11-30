import Button from "../Button";
import style from "./style.module.css";

export const VariantItem = () => {
  return (
    <div className={style.item}>
      <div className={style.item_left}>
        <h2 className={style.boat_title}>Катер "Катерина"</h2>
        <p className={style.boat_seating_capacity}>
          Свободно <span className={style.free_seats}>2</span> из{" "}
          <span className={style.total_seats}>3</span> мест
        </p>
        <div className={style.route_info}>
          <div className={style.route_station}></div>
          <div className={style.route_time}>
            <div className={style.route_time_arrive}>
              <p>Прибудет через 15 мин</p>
              <p>Стоянка 5 минут</p>
            </div>
            <div className={style.route_time_onroad}>
              <p>В пути: 33 минуты</p>
            </div>
            <div className={style.route_time_eta}>
              <p>12 час 58 мин</p>
              <p>Расчетное время прибытия</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.item_right}>
        <h2>Детали заказа:</h2>
        <p>
          Количество пассажиров: <span>1</span>
        </p>
        <p>
          Стоимость: <span>300 ₽</span>
        </p>
        <Button title="купить билет" onClick={() => {}} />
      </div>
    </div>
  );
};
