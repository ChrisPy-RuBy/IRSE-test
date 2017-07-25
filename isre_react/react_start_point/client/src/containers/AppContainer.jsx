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
    user_experiments: [],
    experiment_users: [],
    displayUsers: false,
    displayExperiments: false
  }
this.allExperimentsForUser = this.allExperimentsForUser.bind(this)
this.addExperiment = this.addExperiment.bind(this)
this.addUser = this.addUser.bind(this)
this.loadSampleUsers = this.loadSampleUsers.bind(this)
this.toggleDisplayUser = this.toggleDisplayUser.bind(this)
this.toggleDisplayExperiments = this.toggleDisplayExperiments.bind(this)
this.allUsersForExperiment = this.allUsersForExperiment.bind(this)
}


// this should be refactored
componentDidMount() {

  {
  var userUrl = 'http://localhost:3000/users/'
  var experimentUrl = 'http://localhost:3000/experiments/'
  var userRequest = new XMLHttpRequest()
  var experimentRequest = new XMLHttpRequest()
  userRequest.open('GET', userUrl)
  experimentRequest.open('GET', experimentUrl)
  userRequest.setRequestHeader('Content-Type', "application/json")
  experimentRequest.setRequestHeader('Content-Type', "application/json")

  experimentRequest.onload = () => {
    if(experimentRequest.status === 200) {
      var experimentData =JSON.parse(experimentRequest.responseText)
      console.log("exp data here", experimentData)
      this.setState( {experiments: experimentData} )
    }
  }
  userRequest.onload = () => {
    if(userRequest.status === 200) {
      var userData =JSON.parse(userRequest.responseText)
      this.setState( {users: userData} )
 
      } else {
        console.log("failed connection")
      }
    }
    userRequest.send()
    experimentRequest.send()
  }
 
}

allUsersForExperiment(experiment_id) {
  event.preventDefault()
  const request = new XMLHttpRequest()
  var url = "http://localhost:3000/experiments/" + experiment_id + "/user_experiments"
  request.open("GET", url)
  request.setRequestHeader("Content-Type", "application/json")

  request.onload = () => {
    if(request.status === 200) {
      var data = JSON.parse(request.responseText)
      this.setState({experiment_users: data})
      console.log("check",this.state.experiment_users)
    }
  }
  request.send()
  console.log("request sent")

}

allExperimentsForUser(user_id) {
  event.preventDefault()
  const request = new XMLHttpRequest()
  var url = "http://localhost:3000/users/" + user_id + "/user_experiments"
  request.open("GET", url)
  request.setRequestHeader("Content-Type", "application/json")

  request.onload = () => {
    if(request.status === 200) {
      var data = JSON.parse(request.responseText)
      this.setState({user_experiments: data})
    }
  }
  request.send()
  console.log('request sent')
}


addExperiment (experiment) {
  const experiments = this.state.experiments
  const newExp = [experiment, ...experiments]
  this.setState({experiments: newExp})
  event.preventDefault()
  const request = new XMLHttpRequest()
  request.open("POST", "http://localhost:3000/experiments/")
  request.setRequestHeader("Content-Type", "application/json")
  request.onload = () => {
    if( request.status === 201) {
      const experiment = JSON.parse( request.responseText )
    }
  }
  request.send( JSON.stringify(experiment))
}

addUser (user) {
  console.log("adding users")
  const users = this.state.users
  const newUser = [user, ...users]
  this.setState({users: newUser})
  console.log(this.state.users)
  event.preventDefault()
  const request = new XMLHttpRequest()
  request.open("POST", "http://localhost:3000/users/")
  request.setRequestHeader("Content-Type", "application/json")
  request.onload = () => {
    if( request.status === 201) {
      // const user = JSON.parse( request.resonseText)
    }
  }
  request.send( JSON.stringify(user))
  console.log("request sent")
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

toggleDisplayExperiments() {
  const newDisplay = !this.state.displayExperiments
  this.setState({
    displayExperiments: newDisplay
  })
  console.log(this.state.displayExperiments)
}


render() {


  return(
    <div id="app">
    <div id="app-header">
      <Header/>
    </div>
    <div id="app-body-container">
      <div id="user-container-one">
        <UserDetails addUser={this.addUser} loadSampleUsers={this.loadSampleUsers} users={this.state.users} displayUsers={this.state.displayUsers} toggleDisplayUsers={this.toggleDisplayUser} allExperimentsForUser={this.allExperimentsForUser}/>
      </div>
      <div id="experiment-container">
        <ExperimentalDetails addExperiment={this.addExperiment} experiments={this.state.experiments} displayExperiments={this.state.displayExperiments} toggleDisplayExperiments={this.toggleDisplayExperiments} allUsersForExperiment={this.allUsersForExperiment}/>
      </div>
    </div>
    </div>
  ) 
}

}

export default AppContainer