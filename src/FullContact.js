//modules
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//data
import users from './randomUser.json'

//styles
import './FullContact.css'

class FullContact extends Component{

	render(){
		const uid = parseInt(this.props.match.params.id, 10)
		const contact = users.filter(person => person.id === uid)[0]

		return(
			<div>
				<div className="fullImageContainer">
					<Link to="/list" className="returnArrow">
						<div>&#10094;</div>
					</Link>
					<img src={contact.picture.large} className="contactPic" alt="Contact"/>
				</div>
				<div className="contactInfo">
					<span role="img" aria-label="bust">&#128100;</span> {contact.name.first} {contact.name.last}
				</div>
				<div className="contactInfo email">
					<span role="img" aria-label="envelope">&#128231;</span> {contact.email}
				</div>
				<div className="contactInfo">
					<span role="img" aria-label="telephone receiver">&#128222;</span> {contact.phone}
				</div>
				<div className="contactInfo">
					<span role="img" aria-label="globe">&#127760;</span> {contact.location.city}, {contact.location.state}
				</div>			
			</div>
		)
	}
}

export default FullContact