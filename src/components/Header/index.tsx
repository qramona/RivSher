import style from "./style.module.css";
import logo from "../../assets/img/Logo.svg";
import burger from "../../assets/img/BurgerIcon.png";
import close from "../../assets/img/CloseLogo.png";
import { Burger } from "./Burger";

const Header = () => {
  return (
    <header className={style.header}>
      <Burger isOpen={true} setIsOpen={() => {}} />
      <div className={style.header_logo}>
        <img className={style.header_logo_img} src={logo} alt="Logo" />
      </div>
      <nav className={style.header_nav}>
        <a className={style.header_item} href="#">
          Услуги
        </a>
        <a className={style.header_item} href="#">
          Расписание
        </a>
        <a className={style.header_item} href="#">
          О нас
        </a>
        <a className={style.header_item} href="#">
          Контакты и поддержка
        </a>
        <a className={style.header_item} href="#">
          Новости
        </a>
        <div className={style.header_search}>
          <input
            className={style.header_search_input}
            type="text"
            placeholder="Поиск"
          />
        </div>
        <a className={style.header_item} href="#">
          Личный кабинет
        </a>
      </nav>
      <div className={style.header_items + " " + style.header_burger}>
        <nav className={style.items_nav}>
          <div className={style.header_burger_icons} id={style.header_icons}>
            <img
              className={style.burger_menu}
              id={style.burger_menu}
              src={burger}
              alt="Меню"
            />

            <div id={style.mobile_header_detail}>
              <img
                className={style.close_logo}
                id={style.close_logo}
                src={close}
                alt=""
              />
              <div className={style.header__menu_items} id={style.menu_items}>
                <ul className={style.menu__list_burger} id={style.list_burger}>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Главная
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Услуги
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Расписание
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      О нас
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Контакты и поддержка
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Новости
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Поиск
                    </a>
                  </li>
                  <li className={style.menu__list_item}>
                    <a
                      href="#"
                      className={
                        style.menu__link + " " + style.menu__link_active
                      }
                    >
                      Личный кабинет
                    </a>
                  </li>
                </ul>

                <div className={style.background__list_item}></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
