import React from "react";
// Le dice a Webpack que estos archvios JS usan estas imagenes
import macbook from "../assets/img/macbook.png"; 
import macbook_air from "../assets/img/macbook_air.png";
import macbook_pro from "../assets/img/macbook_pro.png";
import imac from "../assets/img/imac.png"; 
import imac_pro from "../assets/img/imac_pro.png";
import ipad from "../assets/img/ipad.png";
import ipad_mini from "../assets/img/ipad_mini.png";
import ipad_pro from "../assets/img/ipad_pro.png";

export default () => (
    <div>
        <div id="grupo">
            <h1><b>GRUPO NÚMERO X</b></h1>
            <h3>
            Integrantes:
            </h3>
            <list>
            <h4>&emsp;&emsp;- Raso Angelo</h4>
            <h4>&emsp;&emsp;- Billordo Zini Fernanda</h4>
            <h4>&emsp;&emsp;- Botta Teo</h4>
            </list>
        </div>
        <br/>
        <br/>
        <div id="macbooks">
            <h1>Macbook</h1>
            <img src={macbook} alt="macbook" />
            <p>&emsp;Con la MacBook, nos propusimos lograr lo imposible: desarrollar una experiencia completa en la notebook Mac más compacta hasta el momento. No sólo es más ligera y delgada, también es mucho más poderosa. Los procesadores Intel Core m3, i5 e i7 de séptima generación1 y el almacenamiento SSD hasta un 50% más rápido hacen que el rendimiento de la nueva MacBook sea hasta un 20% más potente.</p>
            <br/>

            <h1>Macbook Air</h1>
            <img src={macbook_air} alt="macbook_air" />
            <p>&emsp;La batería de la MacBook Air dura hasta 12 horas con una sola carga, para que puedas trabajar desde la mañana hasta que vuelvas de la oficina sin necesidad de cargarla. Y si quieres relajarte, tienes hasta 12 horas de carga para ver películas en iTunes. Además, como puedes ponerla hasta 30 días en modo de espera, podrás pasar semanas sin usarla y luego continuar todo desde donde lo dejaste.</p>
            <br/>
            
            <h1>Macbook Pro</h1>
            <img src={macbook_pro} alt="macbook_pro" />
            <p>&emsp;La MacBook Pro lleva el rendimiento y la portabilidad de la notebook a otro nivel. Con procesadores y memoria de alto rendimiento, gráficos avanzados, almacenamiento ultrarrápido y mucho más, podrás darle vida a tus ideas más rápido que nunca.</p>
        </div>
        <br/>
        <br/>
        <div id="imacs">
            <h1>Imac</h1>
            <img src={imac} alt="imac" />
            <p>&emsp;La idea que nos motiva al crear una iMac es brindar una experiencia realmente cautivadora. Y ahora, esa idea está más vigente que nunca. La nueva iMac viene con nuevos procesadores, lo último en tecnología gráfica, almacenamiento innovador y conectividad con mayor ancho de banda. Y todo esto cobra vida en la pantalla Retina más brillante y con más colores creada para una iMac hasta ahora. Prepárate para disfrutar una experiencia aún más interactiva, de una forma totalmente nueva.</p>
            <br/>

            <h1>Imac Pro</h1>
            <img src={imac_pro} alt="imac_pro" />
            <p>&emsp;Una iMac con 4 núcleos ya es bastante impresionante, pero una con 8, 10, 14 o 18 núcleos es una verdadera maravilla. Y si le sumamos velocidades Turbo Boost de hasta 4.5 GHz, la iMac Pro tiene la potencia y la flexibilidad para equilibrar el procesamiento multinúcleo con el rendimiento de un solo subproceso. Con las nuevas instrucciones vectoriales AVX-512 y una nueva arquitectura de caché, el procesador gestiona aún más datos y más rápido. Esto significa que podrás hacer muchas tareas a gran velocidad, como renderizar imágenes, editar videos de hasta 8K, retocar fotos, crear efectos de audio en tiempo real o desarrollar apps.</p>

        </div>
        <br/>
        <br/>
        <div id="ipads">
            <h1>Ipad</h1>
            <img src={ipad} alt="ipad" />
            <p>&emsp;¿Cómo sería una computadora si la inventaran hoy? Seguramente muy poderosa, para hacer cualquier tarea. Sería tan portátil que podrías llevarla adonde quisieras y tan intuitiva que podrías usarla como más te gusta: con la mano, con un teclado y hasta con un lápiz. En otras palabras, no sería realmente una computadora, sería el nuevo iPad.</p>
            <br/>

            <h1>Ipad Mini</h1>
            <img src={ipad_mini} alt="ipad_mini" />
            <p>&emsp;Que su tamaño no te confunda. El iPad mini pone en tus manos un rendimiento y una potencia sin igual. Es más delgado y ligero que los anteriores, pero lo suficientemente poderoso para que puedas llevar tus ideas a otro nivel.</p>
            <br/>

            <h1>Ipad Pro</h1>
            <img src={ipad_pro} alt="ipad_pro" />
            <p>&emsp;El nuevo iPad Pro puede hacer todo lo que imaginas, y mucho más. Es más potente que la mayoría de las laptops PC y súper fácil de usar. Su rediseñada pantalla Retina es tan increíble de ver como de tocar. Y además viene con iOS, el sistema operativo móvil más avanzado del mundo. En pocas palabras, el iPad Pro es todo lo que esperas de una computadora moderna. Sólo que ahora es aún mejor.</p>
        </div>
    </div>
  );