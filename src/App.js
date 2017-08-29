import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {


    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: true

  constructor(props) {
    super(props);
    
    this.state = {
      books: [],
      onshelf: [],
      results: [],
      shelf: ''
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((results) => {
      this.setState({ results }, () => this.updateShelf )
    })
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(previousState => ({
        books: previousState.books.filter(b => b.id !== book.id).concat([book])
    }))
  }

  // bookLoader = (books, results) => {
  //   results.map( (book) => (
  //     let index = books.findIndex(book) 
  //     if books.findIndex(book) >= 0 results.concat(books[index]) : book
  //   ))

  //   // index >= 0 ? this.setState({ book: this.props.onshelf(index)}) : this.setState({ book }) 
  // }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={( {history} ) => (
          <BookShelf 
            onshelf={this.state.onshelf} 
            currentlyReading={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
            wantToRead={this.state.books.filter((book) => book.shelf === 'wantToRead')} 
            read={this.state.books.filter((book) => book.shelf === 'read')} 
            books={this.state.books} 
            updateShelf={this.updateShelf} 
            shelf={this.state.shelf} 
          />
          )}
        />
        
        <Route path="/search" render={() => (
          <ListBooks 
            onshelf={this.state.onshelf} 
            getShelf={this.getShelf} 
            searchBooks={this.searchBooks} 
            books={this.state.books } 
            results={this.state.results} 
            updateShelf={this.updateShelf}/>
          )}
        />

      </div> // END OF .app
    )
  }
}

export default BooksApp
