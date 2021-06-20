// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
// import Badge from './components/badge.js'

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

//ingreso variables solo con {}, reciben expresiones matematicas o funciones, si es un valor false, null, undefined no se va a ver
// const name = "isa"
// const jsx= <h1>Hello, {name}!</h1>;

//puedo crear elementos con:tiene tres argumentos react.creacteElement (que tipo de elemento creamos,cuales son atributos,children) , 
// const element = React.createElement('a', { href:'https://platzi.com'}, 'Ir a plazti');

//ejemplo de crear dos hijos en un elemento
//const element = React.createElement(
  //'div',
  //{},
  //React.createElement("h1",{},"pepe"),
  //React.createElement("p",{},"pepe")
//)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge firstName="Isabela" lastName="Pepinillo"/>, container);
ReactDOM.render(<App/>, container);
