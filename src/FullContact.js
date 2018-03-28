//modules
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//data
import users from './randomUser.json'

//styles
import './FullContact.css'

class FullContact extends Component{

	render(){
		let uid = this.props.match.params.id
		let contact = users.filter(person => person.id == uid)[0]
		// console.log(typeof uid)
		// console.log(typeof contact.id)
		
		console.log(contact)

		return(
			<div>
				<div>
					<img src={contact.picture.large} alt="Contact"/>
				</div>
				<div>
					{contact.name.first} {contact.name.last}
				</div>
				<div>
					{contact.email}
				</div>
				<div>
					{contact.phone}
				</div>
				<div>
					{contact.location.city}, {contact.location.state}
				</div>
				<Link to="/list">Return to Contacts</Link>
			</div>
		)
	}
}

export default FullContact