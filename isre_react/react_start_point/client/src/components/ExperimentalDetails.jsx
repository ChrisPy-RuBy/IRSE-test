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
          <div id="experiment-container-two">
          <div id="experiment-data-entry-container">
            <AddExperimentalDataEntryForm addExperiment={this.props.addExperiment}/>
          </div>
            <div id="display-experiment-data">
                <ExperimentInventory/>
            </div>
          </div>
      )
  }

}


export default ExperimentalDetails