//modules
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//data
import users from './randomUser.json'

//styles
import './ListContact.css'

class SlimContact extends Component{
	render(){
		return(
			<li>
				<Link to={{pathname: 'detailed/' + this.props.user.id}} className="slimContainer">
					<img src={this.props.user.picture.thumbnail} className="contactThumb" alt="Contact Thumbnail" />
					<span className="contact">{this.props.user.name.first} {this.props.user.name.last}</span>
				</Link>
			</li>
		)
	}
}

class ListContact extends Component {
	render(){
		return(
			<div>
				<div id="contactListHead">My Contacts</div>
				<ul>
					{users.map(person => <SlimContact user={person} key={'user' + person.id}/>)}
				</ul>
			</div>
		)
	}
}


export default ListContact