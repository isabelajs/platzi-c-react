import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/badge.js';
import BagdeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js'
import api from '../api.js'
import md5 from 'md5'

class BagdeNew extends React.Component {
  state ={ 
    loading: false,
    error: null,
    form : {
      firstName: '',
      lastName: '',
      email:'',
      job:'',
      twitter:'',
      avatarUrl: ''
  } };

  handleChange = e =>{
    if (e.target.name === 'email'){
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
          avatarUrl: `https://www.gravatar.com/avatar/${md5(e.target.value)}?d=identicon`
        }
      })
    }else{
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      })
    }    
  }

  handleSubmit= async (e)=>{
    e.preventDefault();
    this.setState({loading:true, error:null})
    
    try{
      await api.badges.create(this.state.form)
      this.setState({loading:false})
      this.props.history.push('/badges')


    }catch(error){
      this.setState({loading:false, error:error})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading />
    }

    return(
      <React.Fragment>


        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-6">
              <Badge
                firstName = {this.state.form.firstName || 'FIRST NAME'}
                lastName = {this.state.form.lastName || 'LAST NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.job || 'JOB'}
                email = {this.state.form.email || 'EMAIL'}
                avatarUrl=""
              />
            </div>

            <div className="col-6">
              <BagdeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error = {this.state.error}
              type = 'New Attendant'
              />
            </div>
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}

export default BagdeNew