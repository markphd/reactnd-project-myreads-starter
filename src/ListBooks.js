import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

/**
* @description This component is responsible for 
* obtaining query from user 
* to be used in Search function of BooksAPI
*/
class SearchInput extends Component {
	state = {
		results: [],
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
		this.props.searchBooks(query)
		this.props.isQueryEmpty(query.length > 0)
	}

	clearQuery = () => {
		this.setState({
			query: ''
		})
	}
	
	render() {
		return(
			<div className="search-books-bar">
			  <Link to="/" className="close-search">Close</Link>
			  <div className="search-books-input-wrapper">
			    <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} autofocus="true" />
			  </div>
			</div>
		)
	}
}

class ListBooks extends Component {
	state = {
		showResult: '',
		books: []
	}

	isSearchQueryEmpty = (bool) => {
		bool ? this.state.showResult = true : this.state.showResult = false
	}

	loadBook = (book) => {
		let index = this.props.books.findIndex( (b) => b.id === book.id )
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
				shelf={book.shelf || 'none'} 
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