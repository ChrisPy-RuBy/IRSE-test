import React from 'react'

class Experiment extends React.Component {

render() {
  return(
    <li id="user-menu">
      <p>{this.props.details.name}</p>
    </li>
    )
}



}

export default Experiment