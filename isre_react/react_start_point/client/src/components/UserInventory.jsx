import React from 'react'
import User from './User'

class UserInventory extends React.Component {

  constructor() {
    super();
    // this.renderUsers = this.renderUsers.bind(this)
    // this.displayUser =this.displayUser.bind(this)
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

  renderUsers() {

  }



  render() {

    if(this.props.displayUsers) {
      return(
        <div id="user-details-component"> user-details-component
          <button onClick={this.props.loadSampleUsers}>Load users</button>
          <button onClick={this.props.toggleDisplayUsers}>Display all users</button>
        <div className="user-detail-wrap">
           <ul className="list-of-users"> 
           {
             this.props.users.map( (user, index) => <User key={index} details={user}/>)
           }
           </ul>
        </div>
      </div>
      )
    } else {
      return (
          <div id="user-details-component"> user-details-component
            <button onClick={this.props.loadSampleUsers}>Load users</button>
            <button onClick={this.props.toggleDisplayUsers}>Display all users</button>
          </div>
        )

    }
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