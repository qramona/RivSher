import { useState } from "react";
import { Input } from "../form/input";
import {  Calender, Profile , ArrowDown} from "../../icon";

export const UnionBody = () => {
  const [upperIndexOne, setUpperIndexOne] = useState<string>("Откуда");
  const [upperIndexTwo, setUpperIndexTwo] = useState<string>("Куда");

  const [profle, setProfile] = useState<string>("1 пассажир");

  const onChangeUpperIndexOne = (text: string) => {
    setUpperIndexOne(text);
  };
  const onChangeUpperIndexTwo = (text: string) => {
    setUpperIndexTwo(text);
  };
  const onChangeProfile = (text: string) => {
    setProfile(text);
  };

  return (
    <>
      <form className="unionbody__container">
        <div className="unionbody__upper">
          <Input
            value={upperIndexOne}
            change={onChangeUpperIndexOne}
            placeholder={"upperIndexOne"}
            type="text"
          />
          <Input
            value={upperIndexTwo}
            change={onChangeUpperIndexTwo}
            placeholder={"upperIndexTwo"}
            type="text"
          />
        </div>
        <div className="unionbody__lower">
          <Input
            value={profle}
            change={onChangeProfile}
            placeholder={"upperIndexOne"}
            type="text"
            iconLeft={<Profile />}
          />
          <Input value={"сегодня"} type="text" iconLeft={<Calender />} />
          <Input
            value={"тип судна"}
            placeholder={"upperIndexTwo"}
            type="text"
            iconRight={
              <div
                style={{
                  paddingRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArrowDown />
              </div>
            }
          />
        </div>
        <div className="union_button">
          <span>подобрать маршрут</span>
        </div>
      </form>
    </>
  );
};
