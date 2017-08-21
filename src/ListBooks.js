import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
// import { Link } from 'react-router-dom'
import escapeStringRegExp from 'escape-string-regexp'
import SearchInput from './SearchInput'
import Book from './Book'

class ListBooks extends Component {
	state = {
		showResult: '',
		books: []
	}

	isSearchQueryEmpty = (bool) => {
		bool ? this.state.showResult = true : this.state.showResult = false
		console.log(this.state.showResult)
	}

	componentDidMount() {
		this.props.books.map((book) => this.props.onshelf.filter((a) => a.id === book.id ? <Book history={this.props.history} key={a.industryIdentifiers[0].identifier} cover={a.imageLinks.thumbnail} title={a.title} authors={a.authors} id={a.id} shelf={a.shelf} book={a} updateShelf={this.props.updateShelf} /> : <Book history={this.props.history} key={book.industryIdentifiers[0].identifier} cover={book.imageLinks.thumbnail} title={book.title} authors={book.authors} id={book.id} shelf={book.shelf} book={book} updateShelf={this.props.updateShelf} /> ))
	}

	render() {
		return(
			<div className="search-books">
			  <SearchInput searchBooks={this.props.searchBooks} isQueryEmpty={this.isSearchQueryEmpty} />
			  <div className="search-books-results">
			    <ol className="books-grid">
					{this.state.showResult && (
						this.props.results.map((book) => (
							console.log(book)	 	
						))
					)}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default ListBooks