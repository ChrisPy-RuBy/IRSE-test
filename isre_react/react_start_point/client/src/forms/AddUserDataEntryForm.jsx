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
  console.log(user)

}



    render() {
      return(
      <div className="userData">UserDataEntryForm
      <form className='user-edit'>
        <input ref={(input) => this.id = input}type="text" placeholder="user-id"/>
        <input ref={(input) => this.name = input} type="text" placeholder="name"/>
        <input ref={(input) => this.address = input} type="text" placeholder="address"/>
        <input ref={(input) => this.email = input} type="text" placeholder="email"/>
        <input ref={(input) => this.institution = input} type="text" placeholder="institution"/>
        <input ref={(input) => this.orcid_id = input} type="text" placeholder="Orcid_id"/>
        <button className="generate-user-id">Generate User Id</button>
        <button type="submit"  onClick={this.addUser.bind(this)}>Submit User</button>
      </form>
      </div>
      )
    }
}

export default UserDataEntryForm