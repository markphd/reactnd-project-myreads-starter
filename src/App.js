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
      this.setState({ results }, () => this.updateShelf )
    })
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf

    BooksAPI.update(book, shelf)
    .then(res => console.log(res, shelf))
    .then(this.getAllBooks)
  }

  // updateShelf = (book, shelf) => {
  //    book.shelf = shelf;
  //    this.setState(state => ({
  //      books: state.books.filter(book => book).concat([book]) 
  //    }));
  //    BooksAPI.update(book.id, shelf).then(
  //      console.log('Called updateShelf: ', book.title, shelf)
  //    );
  //  };

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
        {JSON.stringify(this.state.books)}
        {JSON.stringify(this.state.results)}
      </div> // END OF .app
    )
  }
}

export default BooksApp
