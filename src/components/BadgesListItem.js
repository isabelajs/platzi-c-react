import React from 'react';


class BadgeListItem extends React.Component{
  render(){
    return(
      <div className= "BadgesListItem">
        <img className="BadgesListItem__avatar "  src={this.props.badge.avatarUrl} alt='' />

        <div>
          <div> 
            <strong>{this.props.badge.firstName} {this.props.badge.lastName}</strong>
          </div>

          <div className="twitter">@ {this.props.badge.twitter}</div>
          <div>{this.props.badge.jobTitle}</div>
        </div>

      </div> 
      
    )
  }
}

export default BadgeListItem


