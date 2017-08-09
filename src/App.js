import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    screen: 'home',
    // screen: 'search',
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // getAllBooks = () => {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books })
  //   })
  // }

  searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf books={this.state.books} />
          )}
        />
        
        <Route path="/search" render={() => (
          <ListBooks searchBooks={this.searchBooks} books={this.state.books } />
          )}
        />

      </div> // END OF .app
    )
  }
}

export default BooksApp
