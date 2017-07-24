import React from 'react'
import AddExperimentalDataEntryForm from '../forms/AddExperimentalDataEntryForm'

class ExperimentInventory extends React.Component {

  render() {
    return(
        <div className="experiment-inventory">This is the container for all the experiments
        <AddExperimentalDataEntryForm/>
        </div>
      )
  }

}

export default ExperimentInventory