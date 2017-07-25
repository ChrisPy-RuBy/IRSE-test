import React from 'react'

class User extends React.Component {

  render() {
    console.log(this.props.details)
    return(
      <li id="user-menu">
        <p>{this.props.details.name}</p>
      </li>
      )

  }

}

export default User

