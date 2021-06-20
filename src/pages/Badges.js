import React from 'react';
import {Link} from 'react-router-dom';

import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader'
import './styles/Badges.css';
import api from '../api.js'

class Badges extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: undefined,
      loading: true,
      error: null,
    }
  }

  componentDidMount(){
    this.fetchData ()

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async ()=>{
    this.setState({ loading:true, error: null})

    try {
      const data = await api.badges.list()
      this.setState({
        loading: false,
        data: data
      })
    } catch (error){
      this.setState({loading:false, error:error})
    }
  }

  componentWillUnmount(){
    clearTimeout(this.intervalId)
  }

  render(){
    if(this.state.loading ===true && !this.state.data){
      return <PageLoading />
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }

    return(
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="Badges__container"> 
          <div className="Badges__buttons">
            <Link to= "/badges/new" className="btn btn-primary">New Badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
            </div>
          </div>

          {this.state.loading && <MiniLoader/>}

        </div>

      </React.Fragment>
    )
  }
}

export default Badges;