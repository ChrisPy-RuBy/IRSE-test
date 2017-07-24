import React from 'react'


class UserInventory extends React.Component {

  constructor() {
    super();
    this.renderUsers = this.renderUsers.bind(this)
  }

  renderUsers(key) {
    const user  =this.props.users[key];
    console.log(user)

    return(
      <li key={key}>
        <span>{user.name}</span>
      </li>
      )


  }



  render() {
    return(
      <div id="user-details-component">
        <button onClick={this.props.loadSampleUsers}>Load users</button>
        <button onClick={this.renderUsers}>Display all users</button>
         <div className="user-detail-wrap">
            <ul className="users">
            </ul>
      </div>,
      </div>
      )
  }
}

export default UserInventory