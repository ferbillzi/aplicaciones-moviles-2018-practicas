import React from "react";
import lapicera1 from "../assets/img/lapicera_01.jpeg"; // Le dice a Webpack que este archvio JS usa esta imagen
import lapicera2 from "../assets/img/lapicera_02.png";
import lapicera3 from "../assets/img/lapicera_03.jpg";

export default () => (
  <div>
    <h1>Lapiceras</h1>
    <img src={lapicera1} alt="lapicera_01" /><p>Descripción lapicera 1</p>
    <img src={lapicera2} alt="lapicera_02" /><p>Descripción lapicera 2</p>
    <img src={lapicera3} alt="lapicera_03" /><p>Descripción lapicera 3</p>

  </div>
);

