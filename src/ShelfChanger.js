import React, { Component } from 'react'

class ShelfChanger extends Component {

	onShelfChange = (e) => {
		this.props.updateShelf(this.props.book, e.target.value)
		this.props.onUpdateShelf(e.target.value)
	}

	render(){
		const shelves = [
			{ 
				"status" : "currentlyReading",
				"label" : "Currently Reading"
			},
			{ 
				"status" : "wantToRead",
				"label" : "Want to Read"
			},
			{ 
				"status" : "read",
				"label" : "Read"
			},
			{ 
				"status" : "none",
				"label" : "None"
			}
		]

		return(
			<select onChange={ this.onShelfChange } value={this.props.shelf}>
				
				<option value="null" disabled>Move to...</option>
			
				{ shelves.map((s) => (
					<option key={s.status} value={s.status}>{s.label}</option>
				))}

			</select>
		)
	}
}

export default ShelfChanger