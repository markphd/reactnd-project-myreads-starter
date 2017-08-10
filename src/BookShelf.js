import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component {

	// componentDidMount(){
	// 	BooksAPI.getAll().then((shelf) => {
	// 		// this.setState({ shelf: books.filter( (shelf) =>    )})
	// 		this.setState({ shelf })
	// 	})
	// }

  state = {
    books: this.props.books
  }

	render() {
    let currentlyReadingShelf = this.props.books.filter((book) => book.shelf === 'currentlyReading')
    let wantToReadShelf = this.props.books.filter((book) => book.shelf === 'wantToRead')
    let readShelf = this.props.books.filter((book) => book.shelf === 'read')

		return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
      
    			<div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
             <div className="bookshelf-books">
              <ol className="books-grid">
                { currentlyReadingShelf.map((book) => (
                  <Book key={book.industryIdentifiers[0].identifier} cover={book.imageLinks.thumbnail} title={book.title} authors={book.authors} id={book.id} shelf={book.shelf} book={book} updateShelf={this.props.updateShelf} />
                ))}
              </ol>
             </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { wantToReadShelf.map((book) => (
                  <Book key={book.industryIdentifiers[0].identifier} cover={book.imageLinks.thumbnail} title={book.title} authors={book.authors} id={book.id} shelf={book.shelf} book={book} updateShelf={this.props.updateShelf} />
                ))}
              </ol>
            </div>
          </div>
          {JSON.stringify(this.state.shelfLoad)}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { readShelf.map((book) => (
                  <Book key={book.industryIdentifiers[0].identifier} cover={book.imageLinks.thumbnail} title={book.title} authors={book.authors} id={book.id} shelf={book.shelf} book={book} updateShelf={this.props.updateShelf} />
                ))}
              </ol>
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({})}>Add a book</Link>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default BookShelf