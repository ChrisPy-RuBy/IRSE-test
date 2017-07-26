import React from 'react'
import AddUserDataEntryForm from '../forms/AddUserDataEntryForm'
import UserInventory from './UserInventory'

class UserDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      <div id="user-container-one">
          <UserInventory loadSampleUsers={this.props.loadSampleUsers} users={this.props.users} displayUsers={this.props.displayUsers} toggleDisplayUsers={this.props.toggleDisplayUsers} allExperimentsForUser={this.props.allExperimentsForUser}/>
          <AddUserDataEntryForm addUser={this.props.addUser} />
      </div>
      )
  }
  }


export default UserDetails