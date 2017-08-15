import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

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
			<select onChange={ this.onShelfChange }>
				<option value="null" disabled selected={this.props.shelf === undefined ? true : false } >Move to...</option>
			
					{ shelves.map((s) => (
						s.status === this.props.shelf ? <option value={s.status} selected>{s.label}</option> : <option value={s.status}>{s.label}</option>
					))}

			</select>
		)
	}
}

export default ShelfChanger