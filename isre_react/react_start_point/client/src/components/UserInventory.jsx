import React from 'react'
import User from './User'

class UserInventory extends React.Component {

  constructor() {
    super();
    this.renderUsers = this.renderUsers.bind(this)
  }

  renderUsers(key) {
    const users  =this.props.users;
    console.log(users)

  }



  render() {



    return(
      <div id="user-details-component"> user-details-component
        <button onClick={this.props.loadSampleUsers}>Load users</button>
        <button onClick={this.renderUsers}>Display all users</button>
         <div className="user-detail-wrap">
            <ul className="list-of-users"> 
            {
              this.props.users.map( (user, index) => <User key={index} details={user}/>)
            }
            </ul>
      </div>
      </div>
      )
  }
}

export default UserInventory

// <ul className="list-of-fishes">
//   {
//     Object
//       .keys(this.state.fishes)
//       .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
//   }
// </ul>