
import { UnionBox } from "../view/unionbox";
import { Plus, Minus, Share } from "../../icon";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1>Закажи речное такси и&nbsp;не&nbsp;теряй время в&nbsp;пробках</h1>
      </div>
      <div className="map">
        <div className="mapcontainer">
          <UnionBox />
        </div>
        <div className="map__settings_container">
          <div className="zoom">
            <div className="icon_container">
              <Plus />
            </div>
            <div className="icon_container">
              <Minus />
            </div>
          </div>
          <div className="icon_container">
            <Share />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
