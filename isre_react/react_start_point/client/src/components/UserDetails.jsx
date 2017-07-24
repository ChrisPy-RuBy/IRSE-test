import React from 'react'
import AddUserDataEntryForm from '../forms/AddUserDataEntryForm'

class UserDetails extends React.Component {

  render() {
    return ( 
        <div className="user-details-component">user details
          <AddUserDataEntryForm addUser={this.props.addUser}/>
        </div>

      )
  }

}

export default UserDetails