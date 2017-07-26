import React from 'react'
import User from './User'

class UserInventory extends React.Component {

  constructor() {
    super();
    // this.renderUsers = this.renderUsers.bind(this)
    // this.displayUser =this.displayUser.bind(this)
    this.toggleDisplayUserExperiements.bind(this)
    this.allExperimentsForUser.bind(this, 60)

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

  toggleDisplayUserExperiements() {
    console.log("make it here")
    this.props.toggleDisplayUserExperiements()
  }

  allExperimentsForUser() {
    console.log("button clicked")
    this.props.allExperimentsForUser(60)
  }

  handleClick(event) {
    event.preventDefault();
    console.log('clicked')
    this.allExperimentsForUser()
    this.toggleDisplayUserExperiements()

  }

  render() {

    if (this.props.hasSelectedUser) {
      return(
        <div id="user-details-container">
          <div id="user-details-header">
            <h4 id="box-title">User Details</h4>
          <div id="button-container-one">
        <button onClick={this.props.toggleDisplayUsers}>Display all</button>
        <button onClick={this.handleClick.bind(this)}>Return all EXP for user</button>
        </div>
        </div>
        <div id='user-details-display-container'>
              <div id="user-details-image-and-text">
              <div id="image-container">Image</div>
              <div id="user-details-container-small">Detailed Details</div>
              </div>
              <div id="further-details">MOAR DEtailed details</div>
        </div>
        </div>
        )
    }

    else if(this.props.displayUsers) {
      return(
        <div id="user-details-container">
        <div id="user-details-header">
        <h4 id="box-title">User Details</h4>
        <div id="button-container-one">
        <button onClick={this.props.toggleDisplayUsers}>Display all</button>
        <button onClick={this.props.allExperimentsForUser.bind(this, 60)}>Return all EXP for user</button>
        </div>
        </div>
        <div id='user-details-display-container'>
        <div id="data-container">
        <ul id="user-details-box"> 
        <div id='user-details-title-header'>
        <p id="user-details-table-name-title">NAME</p>
        <p id="user-details-table-institution-title">INSTIT.</p>
        <p id="user-details-table-address-title">ADDRESS</p>
        <p id="user-details-table-select-title"></p>
        </div>
        {
          this.props.users.map( (user, index) => <User key={index} details={user} toggleSelectedUser={this.props.toggleSelectedUser}/>)
        }
        </ul>
        </div>
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
        <div id='user-details-display-container'>
        user-details-display-container
        </div>
        </div>
        )

    }
  }
}

export default UserInventory



