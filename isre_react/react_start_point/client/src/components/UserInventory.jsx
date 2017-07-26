import React from 'react'
import User from './User'

class UserInventory extends React.Component {

  constructor() {
    super();
    // this.renderUsers = this.renderUsers.bind(this)
    // this.displayUser =this.displayUser.bind(this)

  }


  // displayUser() {
  //   const toggle = this.props.displayUser
  //   console.log("toggle", toggle)
  //   this.props.displayUser = true 
  //   console.log("toggle test", this.props.displayUser)


  // }

  // renderUsers() {
  //   console.log("displayUsers", this.props.displayUser)
  //   console.log("users", this.props.users)
  // }

  allExperimentsForUser() {
    console.log("button clicked")
      this.props.allExperimentsForUser(60)
  }



  render() {

    if(this.props.displayUsers) {
      return(
        <div id="user-details-container">
          <div id="user-details-header">
            <h4 id="box-title">User Details</h4>
          </div>
          <button onClick={this.props.loadSampleUsers}>Load ubberss</button>
          <button onClick={this.props.toggleDisplayUsers}>Display all users</button>
          <button onClick={this.props.allExperimentsForUser.bind(this, 60)}>Return all experiments for one user</button>
        <div className="user-detail-wrap">
           <ul className="list-of-users"> 
           {
             this.props.users.map( (user, index) => <User key={index} details={user}/>)
           }
           </ul>
        </div>
      </div>
      )
    } else {
      return (
          <div id="user-details-container">
          <div id="user-details-header">
            <h4 id="box-title">User Details</h4>
            <div id="button-container-one">
            <button onClick={this.props.toggleDisplayUsers}>Display all</button>
            <button onClick={this.props.allExperimentsForUser.bind(this, 60)}>Return all EXP for user</button>
          </div>
          </div>
        </div>
        )

    }
  }
}

export default UserInventory

