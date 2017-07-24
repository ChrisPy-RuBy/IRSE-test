import React from 'react'
import AddUserDataEntryForm from '../forms/AddUserDataEntryForm'


class UserInventory extends React.Component {

  render() {
    return(
      <div className="user-details-component">user details
        <AddUserDataEntryForm/>
      </div>
      )
  }
}

export default UserInventory