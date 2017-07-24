import React from 'react'
import ExperimentInventory from './ExperimentInventory.jsx'
import AddExperimentalDataEntryForm from '../forms/AddExperimentalDataEntryForm'


class ExperimentalDetails extends React.Component {


// this.addExperiment = this.addExperiment.bind(this)

// addExperiment(experiment) {
//   const experiments = {...this.state.experiments};


//   const timestamp = Date.now();
//   experiments[`fish-${timestamp}`] = experiment
//   this.setState({experiments})
// }


  render() {
    return (
      <div>
        <div className="experiment-details-container">experimental details</div>
        <div className="experiment-inventory">This is the container for all the experiments</div>
        <AddExperimentalDataEntryForm addExperiment={this.props.addExperiment}/>
      </div>
      )
  }

}

export default ExperimentalDetails