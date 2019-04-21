import React from "react";
import { WhoAreWeData } from "../../content";

import "./WhoAreWe.scss";

const WhoAreWe = () => {
  return (
    <section className="WhoAreWe">
      <div className="WhoAreWe__content">
        {WhoAreWeData.map(item => {
          return (
            <div className="WhoAreWe__content--block" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoAreWe;
