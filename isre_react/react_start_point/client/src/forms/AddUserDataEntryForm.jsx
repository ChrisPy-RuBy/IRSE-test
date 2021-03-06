import React from 'react'

class UserDataEntryForm extends React.Component {





addUser(event) {
  event.preventDefault()
  console.log("user submit pressed")
  const user = {
    userid: this.id.value,
    name: this.name.value,
    address: this.address.value,
    email: this.address.value,
    institution: this.institution.value,
    Orcid_id: this.orcid_id.value,
  }
  this.props.addUser(user)
  console.log("the user in bottom", user)

}



    render() {
      return(
        <div id="users-data-entry-form-component">
      <div id="user-data-entry-form-header">
      <h4 id="box-title">New User</h4>
      <div id="button-container-three">
        <button className="generate-user-id">Generate User Id</button>
      </div>
      </div>
      <form className='user-edit'>
        <input ref={(input) => this.id = input}type="text" placeholder="USER-ID"/>
        <input ref={(input) => this.name = input} type="text" placeholder="NAME"/>
        <input ref={(input) => this.address = input} type="text" placeholder="ADDRESS"/>
        <input ref={(input) => this.email = input} type="text" placeholder="EMAIL"/>
        <input ref={(input) => this.institution = input} type="text" placeholder="INSTITUTION"/>
        <input ref={(input) => this.orcid_id = input} type="text" placeholder="ORCID_ID"/>
        <button type="submit"  onClick={this.addUser.bind(this)}>Submit User</button>
      </form>
      </div>
      )
    }
}

export default UserDataEntryForm