import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
// import { Link } from 'react-router-dom'
import escapeStringRegExp from 'escape-string-regexp'
import SearchInput from './SearchInput'

class ListBooks extends Component {
	state = {
		showResult: ''
	}

	isSearchQueryEmpty = (bool) => {
		bool ? this.state.showResult = true : this.state.showResult = false
		console.log(this.state.showResult)
	}

	render() {
		return(
			<div className="search-books">
			  <SearchInput searchBooks={this.props.searchBooks} isQueryEmpty={this.isSearchQueryEmpty} />
			  <div className="search-books-results">
			    <ol className="books-grid">
					{this.state.showResult && (
						 this.props.results.map((book) => (
							<li key={book.id} className=''>
								<div className="book">
									<div className="book-top">
									  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
									  <div className="book-shelf-changer">
									    <select>
									      <option value="none" disabled>Move to...</option>
									      <option value="currentlyReading">Currently Reading</option>
									      <option value="wantToRead">Want to Read</option>
									      <option value="read">Read</option>
									      <option value="none">None</option>
									    </select>
									  </div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.subtitle}</div>			
								</div>
							</li>
						))
					)}			    	
			    </ol>
			    
			  </div>
			</div>
		)
	}
}

export default ListBooks