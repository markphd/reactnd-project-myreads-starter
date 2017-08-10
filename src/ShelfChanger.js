import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

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
			<select onChange={(event) => this.props.updateShelf(this.props.book, event.target.value)}>
				{ this.props.shelf === undefined ? <option value="null" disabled selected="true">Move to...</option> : <option disabled>Move to...</option> }
				{ shelves.map((s) => (
					s.status === this.props.shelf ? <option value={s.status} selected>{s.label}</option> : <option value={s.status}>{s.label}</option> 
				))}
			</select>
		)
	}
}

export default ShelfChanger