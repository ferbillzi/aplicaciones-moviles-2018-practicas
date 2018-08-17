import React from "react";
import pluma1 from "../assets/img/pluma_01.jpg"; // Le dice a Webpack que este archvio JS usa esta imagen
import pluma2 from "../assets/img/pluma_02.jpg";
import pluma3 from "../assets/img/pluma_03.jpg";

export default () => (
  <div>
    <h1>Plumas</h1>
    <img src={pluma1} alt="pluma_01" />;
    <img src={pluma2} alt="pluma_02" />;
    <img src={pluma3} alt="pluma_03" />;
  </div>
);

