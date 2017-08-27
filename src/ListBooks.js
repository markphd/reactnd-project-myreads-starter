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
		console.log(this.state.showResult)
	}

	// componentDidMount() {
	// 	// this.props.books.map((book) => )
	// 	this.props.results.map((book) => this.props.onshelf.filter((a) => a.id === book.id ? console.log(a) : console.log(book) ))
	// }

	bookLoader = (book) => {
		let index = this.props.onshelf.indexOf(book)
		index >= 0 ? this.setState({ book: this.props.onshelf(index)}) : this.setState({ book }) 
	}

	render() {
		return(
			<div className="search-books">
			  <SearchInput searchBooks={this.props.searchBooks} isQueryEmpty={this.isSearchQueryEmpty} />
			  <div className="search-books-results">
			    <ol className="books-grid">
					{this.state.showResult && (
						this.props.results.map((book) => (
							this.bookLoader(book),
							<Book history={this.props.history} key={this.state.book.industryIdentifiers[0].identifier} cover={this.state.book.imageLinks.thumbnail} title={this.state.book.title} authors={this.state.book.authors} id={this.state.book.id} shelf={this.state.book.shelf} book={this.state.book} updateShelf={this.props.updateShelf} />
						))
					)}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default ListBooks