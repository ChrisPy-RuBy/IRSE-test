import React from 'react'
import AddUserDataEntryForm from '../forms/AddUserDataEntryForm'
import UserInventory from './UserInventory'

class UserDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("this", this.props.displayUsers)
    return ( 
        <div className="user-details-component">user details
          <AddUserDataEntryForm addUser={this.props.addUser}/>
          <UserInventory loadSampleUsers={this.props.loadSampleUsers} users={this.props.users} displayUsers={this.props.displayUsers} toggleDisplayUsers={this.props.toggleDisplayUsers}/>
        </div>
      )
  }
  }


export default UserDetails