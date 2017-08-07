import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
// import { Link } from 'react-router-dom'
import escapeStringRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class ListBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	};

	clearQuery = () => {
		this.setState({ query: '' })
	}

	testFunc = (val) => {
		console.log("Success!", val);
	}

	render() {

		let resultBooks
		const match = new RegExp(escapeStringRegExp(this.state.query), 'i')
		// resultBooks = this.state.query ? this.props.books.filter((book) => match.test(book.title)) : this.props.books

		return(
			<div className="search-books">
			  <div className="search-books-bar">
			    <a className="close-search" onClick={() => {}}>Close</a>
			    <div className="search-books-input-wrapper">
			      <input type="text" placeholder="Search by title or author" onChange={(event) => this.props.searchBooks(event.target.value)} />
			    </div>
			    <button onClick={this.props.getAllBooks}>Show All</button>
			  </div>
			  <div className="search-books-results">
			    <ol className="books-grid">
			    	{ this.props.books.map((book) => (
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
			    	))}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default ListBooks