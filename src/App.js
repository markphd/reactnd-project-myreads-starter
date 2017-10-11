import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      books: [],
      onshelf: [],
      shelf: ''
    }
  }

  /**
  * @description When App component mounts, BooksAPI getAll is called
  * to collect list of Books that are already on shelf 
  * that has a shelf property.
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  /**
  * @description This method is passed down to <ListBooks> component
  * to do the search and store the result in this.state.results 
  */
  searchBooks = (query) => {
    BooksAPI.search(query).then((results) => {
      if (results.error) {
        this.setState({ results: [] });
      } else {
        this.setState({ results });
      }
    })
  }

  /**
  * @description This method is triggered when there is a change event 
  * fired within the <Book> component. This is passed down as props to
  * <ShelfChanger> component. 
  */
  updateShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(previousState => ({
        books: previousState.books.filter(b => b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
    .then((results) => {
      if (results.error) {
        this.setState({ books: this.previousState.books });
      } 
    })
  }

  render() {
    const { onshelf, books, shelf, results } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={( {history} ) => (
          <BookShelf 
            onshelf={onshelf} 
            currentlyReading={books.filter((book) => book.shelf === 'currentlyReading')}
            wantToRead={books.filter((book) => book.shelf === 'wantToRead')} 
            read={books.filter((book) => book.shelf === 'read')} 
            books={books} 
            updateShelf={this.updateShelf} 
            shelf={shelf} 
          />
          )}
        />
        
        <Route path="/search" render={() => (
          <ListBooks 
            onshelf={onshelf} 
            getShelf={this.getShelf} 
            searchBooks={this.searchBooks} 
            books={books } 
            results={results} 
            updateShelf={this.updateShelf}/>
          )}
        />

      </div>
    )
  }
}

export default BooksApp
