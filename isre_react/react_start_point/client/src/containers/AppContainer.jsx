import React from 'react'
import Header from '../components/Header'
import UserDetails from '../components/UserDetails'
import ExperimentalDetails from '../components/ExperimentalDetails'
import sampleUsers from '../sample-users'

class AppContainer extends React.Component {

constructor() {
  super()
  this.state = {
    users: [],
    experiments: [],
    displayUsers: false,
    displayExperiment: false
  }
this.addExperiment = this.addExperiment.bind(this)
this.addUser = this.addUser.bind(this)
this.loadSampleUsers = this.loadSampleUsers.bind(this)
}

addExperiment (experiment) {
  const experiments = this.state.experiments
  const newExp = [experiment, ...experiments]
  this.setState({experiments: newExp})
}

addUser (user) {
  const users = this.state.users
  const newUser = [user, ...users]
  this.setState({users: newUser})
}

loadSampleUsers() {
  const users = this.state.users
    this.setState({
    users: sampleUsers
  })
}

toggleDisplayUser() {
  const newDisplay = !this.state.displayUsers
  this.setState({
    displayUsers: newDisplay
  })

  
}

render() {

console.log(this.state.displayUsers)

  return(
    <div id="app">
    <div id="app-header">
      <Header/>
    </div>
    <div id="app-body-container">
      <div id="user-container">
        <UserDetails addUser={this.addUser} loadSampleUsers={this.loadSampleUsers} users={this.state.users} displayUsers={this.state.displayUsers} toggleDisplayUsers={this.toggleDisplayUser.bind(this)}/>
      </div>
      <div id="experiment-container">
        <ExperimentalDetails addExperiment={this.addExperiment}/>
      </div>
    </div>
    </div>
  ) 
}

}

export default AppContainer