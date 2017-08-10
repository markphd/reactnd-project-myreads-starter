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
      results: [],
      shelf: ''
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((results) => {
      this.setState({ results })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(res => console.log(res, shelf))
    .then(this.getAllBooks())
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={( {history} ) => (
          <BookShelf books={this.state.books} updateShelf={this.updateShelf} shelf={this.state.shelf} />
          )}
        />
        
        <Route path="/search" render={() => (
          <ListBooks searchBooks={this.searchBooks} books={this.state.books } results={this.state.results} updateShelf={this.updateShelf} />
          )}
        />

      </div> // END OF .app
    )
  }
}

export default BooksApp
