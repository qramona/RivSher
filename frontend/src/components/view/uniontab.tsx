import { useState } from "react";

export const UnionTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const TabOptions: string[] = [
    "Речное такси",
    "Регулярные рейсы",
    "Экскурсии",
    "Активный заказ",
  ];

  return (
    <>
      <div className="tabcontainer">
        {TabOptions.map((option, index) => {
          return (
            <div
              onClick={() => setActiveTab(index)}
              className="taboption"
              key={index}
              style={{
                backgroundColor:
                  activeTab === index ? "rgba(180, 180, 180, 1)" : "#E4E4E4",
                color:
                  activeTab === index
                    ? "rgba(11, 11, 11, 1)"
                    : "rgba(114, 114, 114, 1)",
              }}
            >
              <span>{option}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
