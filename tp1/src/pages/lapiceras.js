import React from "react";
import lapicera1 from "../assets/img/lapicera_01.jpeg"; // Le dice a Webpack que este archvio JS usa esta imagen
import lapicera2 from "../assets/img/lapicera_02.png";
import lapicera3 from "../assets/img/lapicera_03.jpg";

export default () => (
  <div>
    <h1>Lapiceras</h1>
    <img src={lapicera1} alt="lapicera_01" />;
    <img src={lapicera2} alt="lapicera_02" />;
    <img src={lapicera3} alt="lapicera_03" />;

  </div>
);

