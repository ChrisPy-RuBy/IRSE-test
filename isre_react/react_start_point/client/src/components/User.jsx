import React from 'react'

class User extends React.Component {

constructor(props) {
  super(props)

}

buttonClicked() {
  console.log(this.props.details)
}

  render() {
    return(
      <span id="user-table-entry">
        <p id="user-details-table-name">{this.props.details.name}</p>
        <p id="user-details-table-institution">{this.props.details.institution}</p>
        <p id="user-details-table-address">{this.props.details.address}</p>
        <button id="user-select-button" onClick={this.props.toggleSelectedUser}>select user</button>
      </span>
      )

  }

}

export default User

