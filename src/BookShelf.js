import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {

	render() {
     
		return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>R E A◗ M E</h1>
        </div>
        <div className="list-books-content">
      
    			<div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
             <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.currentlyReading.map((book) => (
                  <Book 
                    key={book.industryIdentifiers[0].identifier} 
                    cover={book.imageLinks.thumbnail} 
                    title={book.title} 
                    authors={book.authors} 
                    id={book.id} 
                    shelf={book.shelf} 
                    book={book} 
                    updateShelf={this.props.updateShelf} 
                  />
                ))}
              </ol>
             </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.wantToRead.map((book) => (
                  <Book 
                    key={book.industryIdentifiers[0].identifier} 
                    cover={book.imageLinks.thumbnail} 
                    title={book.title} 
                    authors={book.authors} 
                    id={book.id} 
                    shelf={book.shelf || 'None'} 
                    book={book} 
                    updateShelf={this.props.updateShelf} 
                  />
                ))}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.read.map((book) => (
                  <Book 
                    key={book.industryIdentifiers[0].identifier} 
                    cover={book.imageLinks.thumbnail} 
                    title={book.title} 
                    authors={book.authors} 
                    id={book.id} 
                    shelf={book.shelf} 
                    book={book} 
                    updateShelf={this.props.updateShelf} 
                  />
                ))}
              </ol>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
          
        </div>
      </div>
		)
	}
}

export default BookShelf