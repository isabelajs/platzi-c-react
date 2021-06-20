import React from 'react';
import Navbar from './Navbar.js'

function Layout (props){
  //debe regresar un solo elemento
  //se usa react.fragment para pasar varios parametros, es un componente
  return (
    <React.Fragment>
      <Navbar/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout;