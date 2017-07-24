import React from 'react'

class AddExperimentalDataEntryForm extends React.Component {


  createExperiment(event) {
    event.preventDefault();
    const experiment = {
      userid: this.id.value,
      experimentTitle: this.title.value,
      experimentDescription: this.desc.value,
      field: this.field.value,
      image: this.image.value,
    }
    console.log("here is an experiment", experiment)
    this.props.addExperiment(experiment)
  }

  generateRandomExperimentId() {
    var code = "xxxx-1111-2222-yyyy-vvvv"
    console.log(code)
  }

  render() {
    return(
      <div className="experimental-data-entry-form">Experimental data entry
        <form className='experiment-edit' onClick={this.createExperiment.bind(this)}>
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
      
      <button className="generate-experiment-id" onClick={this.generateRandomExperimentId.bind(this)}>Generate Experiment Id</button>
      <button type="submit">Add Experiment</button>
      </form>


      </div>
      )
  }

}

export default AddExperimentalDataEntryForm
