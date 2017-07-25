import React from 'react'
import AddExperimentalDataEntryForm from '../forms/AddExperimentalDataEntryForm'

class ExperimentInventory extends React.Component {

  render() {
    return(
        <div id="experiment-inventory">This is the container for all the experiments
          <button onClick={this.props.loadSampleExperiments}>Load experiments</button>
          <button onClick={this.props.toggleDisplayExperiments}>Display all experiments</button>
        </div>
      )
  }

}

export default ExperimentInventory
