import React from 'react'
import AddExperimentalDataEntryForm from '../forms/AddExperimentalDataEntryForm'
import Experiment from './experiment'

class ExperimentInventory extends React.Component {




  allUsersForExperiment() {
    this.props.allUsersForExperiment(62)
  }

  render() {

    if(this.props.displayExperiments) {

      return (   
        <div id="experiment-inventory">
          <h4 id="box-title">Experiments Running</h4>
          <button onClick={this.props.loadSampleExperiments}>Load experiments</button>
          <button onClick={this.props.toggleDisplayExperiments}>Display all experiments</button>
          <button onClick={this.props.allUsersForExperiment.bind(this, 62)}>Display all experiments</button>
          <div className="experimental-detail-wrap">
            <ul className="list-of-experiments"> 
             {
              this.props.experiments.map( (experiment, index) => <Experiment key={index} details={experiment}/>)
              }
            </ul>
          </div>
         </div>
         )
     } else {
        return (
        <div id="experiment-inventory">
        <h4 id="box-title">Experiments Running</h4>
          <button onClick={this.props.loadSampleExperiments}>Load experiments</button>
          <button onClick={this.props.toggleDisplayExperiments}>Display all experiments</button>
          <button onClick={this.props.allUsersForExperiment.bind(this, 62)}>All experiments for a user</button>
        </div>
        )
     }
   }

 }
 export default ExperimentInventory
