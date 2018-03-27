import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class FullContact extends Component{
	render(){
		return(
			<div>
				<div>This Component is displayed when a contact is clicked. It had a variable passed in with a value of {this.props.match.params.id}</div>
				<Link to="/list"> Return To List </Link>
			</div>
		)
	}
}

export default FullContact