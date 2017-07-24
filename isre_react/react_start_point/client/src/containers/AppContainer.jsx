import React from 'react'
import Header from '../components/Header'
import UserDetails from '../components/UserDetails'
import ExperimentalDetails from '../components/ExperimentalDetails'

class AppContainer extends React.Component {

constructor() {
  super()
  this.state = {
    users: [],
    experiments: []
  }
this.addExperiment = this.addExperiment.bind(this)
this.addUser = this.addUser.bind(this)
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



render() {
  return(
  <div className="I-R-S-E">
    <Header/>
    <UserDetails addUser={this.addUser}/>
    <ExperimentalDetails addExperiment={this.addExperiment}/>
  </div>
  ) 
}

}

export default AppContainer