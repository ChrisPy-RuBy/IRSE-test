import React from 'react'
import AddUserDataEntryForm from '../forms/AddUserDataEntryForm'
import UserInventory from './UserInventory'

class UserDetails extends React.Component {

  render() {
    return ( 
        <div className="user-details-component">user details
          <AddUserDataEntryForm addUser={this.props.addUser}/>
          <UserInventory loadSampleUsers={this.props.loadSampleUsers} users={this.props.users}/>
        </div>
      )
  }

}

export default UserDetails