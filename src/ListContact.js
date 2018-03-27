//libraries
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//data
import users from './randomUser.json'

//styles
import './ListContact.css'

class ListContact extends Component {
	render(){
		return(
			<div>
				<div id="contactListHead">Contacts</div>
				<ul>
					{users.map(user => <li><Link to={{pathname: 'detailed/' + user.id}}>{user.name.first} {user.name.last}</Link></li>)}
				</ul>
			</div>
		)
	}
}


export default ListContact