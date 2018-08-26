

import React from "react";
import Link from "gatsby-link";
import apple from "../assets/img/apple.png";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div>
    <div css={{ margin: `0 auto`, maxWidth: 900, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem`}}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <img css={{ display: `inline`, width: `25px`, height: `30px`}} src={apple} alt="apple"/>
          </Link>
          <ul css={{ listStyle: `none`, float: `right`}}>
            <ListLink to="/#grupo">Grupo</ListLink>
            <ListLink to="/#macbooks">Macbooks</ListLink>
            <ListLink to="/#imacs">Imacs</ListLink>
            <ListLink to="/#ipads">Ipads</ListLink>
          </ul>
        </header>
        {children()}
    </div>
    <footer css={{ 
                   color: 'whitesmoke',
                   background: '#999',
                   paddingLeft: '30%',
                   paddingTop: '5px',
                   width: '100%',
                   height: '40px',
                   bottom: '0px',
                   position: 'fixed',
                }}>
      Página diseñada para la cátedra de Aplicaciones Móviles - Año 2018
    </footer>
  </div>


