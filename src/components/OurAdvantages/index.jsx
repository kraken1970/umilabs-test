import React from "react";
import { OurAdvantagesData } from "../../content";
import "./OurAdvantages.scss";

const OurAdvantages = () => {
  return (
    <section className="OurAdvantages">
      <h2>Приимущества работы с нами</h2>
      <div className="OurAdvantages__content">
        {OurAdvantagesData.map(item => {
          return (
            <div className="OurAdvantages__content--block" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurAdvantages;
