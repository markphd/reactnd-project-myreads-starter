import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
// import { Link } from 'react-router-dom'
import escapeStringRegExp from 'escape-string-regexp'
import SearchInput from './SearchInput'
import Book from './Book'

class ListBooks extends Component {
	state = {
		showResult: '',
		books: [],
		book: {}
	}

	isSearchQueryEmpty = (bool) => {
		bool ? this.state.showResult = true : this.state.showResult = false
	}

	loadBook = (book) => {
		let index = this.props.books.findIndex( (b) => b.id === book.id )
		console.log(this.props.books[index])
		if (index >= 0) {
			return <Book
				key={this.props.books[index].industryIdentifiers[0].identifier} 
				cover={this.props.books[index].imageLinks.thumbnail} 
				title={this.props.books[index].title} 
				authors={this.props.books[index].authors} 
				id={this.props.books[index].id} 
				shelf={this.props.books[index].shelf} 
				book={this.props.books[index]} 
				updateShelf={this.props.updateShelf} />
		} else {
			return <Book
				key={book.industryIdentifiers[0].identifier} 
				cover={book.imageLinks.thumbnail} 
				title={book.title} 
				authors={book.authors} 
				id={book.id} 
				shelf={book.shelf} 
				book={book} 
				updateShelf={this.props.updateShelf} />
		}
	}

	render() {
		return(
			<div className="search-books">
			  <SearchInput searchBooks={this.props.searchBooks} isQueryEmpty={this.isSearchQueryEmpty} />
			  <div className="search-books-results">
			    <ol className="books-grid">
					{this.state.showResult && (
						this.props.results.map((book) => (
							this.loadBook(book)
						))
					)}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default ListBooks