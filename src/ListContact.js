//libraries
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ListContact extends Component {
	render(){
		return(
			<li><Link to="/detailed/5">I am a contact in a list</Link></li>
		)
	}
}


export default ListContact