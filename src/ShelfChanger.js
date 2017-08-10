import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

	render(){
		return(
			<select onChange={(event) => this.props.updateShelf(this.props.book, event.target.value)}>
			  <option value="none" disabled>Move to...</option>
			  <option value="currentlyReading">Currently Reading</option>
			  <option value="wantToRead">Want to Read</option>
			  <option value="read">Read</option>
			  <option value="none">None</option>
			</select>
		)
	}
}

export default ShelfChanger