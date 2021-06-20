import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component{
  //define el resultado que vamos a ver en pantalla
  render(){
    return (
      <div className="Badge">

        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className='Badge__avatar' email ={this.props.email} alt='Avatar' />
          <h1> {this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3> 
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #estabienchido
        </div>

      </div>
    );
    
  }
}

export default Badge;


//todos los componentes requieren aunque sea un metodo que es obligatorio