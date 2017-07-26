import React from 'react'

class Experiment extends React.Component {

render() {

  console.log("experiment details", this.props.details)

  return(
    <span id="user-menu">
      <p>{this.props.details.title}</p>
    </span>
    )
}



}

export default Experiment