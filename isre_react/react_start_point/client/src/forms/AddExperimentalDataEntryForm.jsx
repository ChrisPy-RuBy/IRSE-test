import React from 'react'

class AddExperimentalDataEntryForm extends React.Component {


  createExperiment(event) {
    event.preventDefault();
    const experiment = {
      userid: this.id.value,
      title: this.title.value,
      experimentDescription: this.desc.value,
      field: this.field.value,
      image: this.image.value,
    }
    console.log("here is an experiment", experiment)
    this.props.addExperiment(experiment)
  }

  generateRandomExperimentId() {

     var newCode = `${Math.floor(Math.random()*9999)}- ${Math.floor(Math.random()*9999)}-${Math.floor(Math.random()*9999)}-${Math.floor(Math.random()*9999)}`
  }

  render() {
    return(
      <div id="experiments-data-entry-form-component">
      <div id="experiment-data-entry-form-header">
        <h4 id="box-title">New Experiment</h4>
        <div id="button-container-four">
      <button className="generate-experiment-id" onClick={this.generateRandomExperimentId.bind(this)}>Generate Experiment Id</button>
      </div>
      </div>
      <div id="experimental-data-entry-form-container">
        <form className='experiment-edit'>
          <input ref={(input) => this.id = input} type="text" placeholder="user-id"/>
          <input ref={(input) => this.title = input} type="text" placeholder="experiment-title"/>
          <input ref={(input) => this.desc = input} type="text" placeholder="experiment-desc"/>
          <input ref={(input) => this.image = input} type="text" placeholder="docs to upload"/>
        <select ref={(input) => this.field = input} name="" id="">
          <option value="chemistry">chemistry</option>
          <option value="psycology">psycology</option>
          <option value="physics">physics</option>
          <option value="self-experimentation">self-experimentation</option>
      </select>
      <button type="submit" onClick={this.createExperiment.bind(this)}>Add Experiment</button>
      </form>
      </div>
      </div>
      )
  }

}

export default AddExperimentalDataEntryForm
