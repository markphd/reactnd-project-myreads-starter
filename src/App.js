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
      this.setState({ onshelf: books.filter((book) => book.shelf !== undefined) })
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ onshelf: books.filter((book) => book.shelf !== undefined) })
    })
  }

  getShelf = (c, r, w) => {
    this.setState({ onshelf: c, r, w})
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((results) => {
      this.setState({ results }, () => this.updateShelf )
    })
  }

  updateShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
    .then(res => console.log(res, shelf))
    .then(this.setState({shelf}))
    .then(this.props.onUpdateShelf)
    .then(this.getAllBooks)
    
    this.props.onUpdateShelf
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
          <BookShelf 
            onshelf={this.state.onshelf} 
            currentlyReading={this.state.onshelf.filter((book) => book.shelf === 'currentlyReading')}
            wantToRead={this.state.onshelf.filter((book) => book.shelf === 'wantToRead')} 
            read={this.state.onshelf.filter((book) => book.shelf === 'read')} 
            books={this.state.books} 
            updateShelf={this.updateShelf} 
            shelf={this.state.shelf} 
            getShelf={this.getShelf}/>
          )}
        />
        
        <Route path="/search" render={( {history} ) => (
          <ListBooks onshelf={this.state.onshelf} getShelf={this.getShelf} searchBooks={this.searchBooks} books={this.state.books } results={this.state.results} updateShelf={this.updateShelf} history={history} />
          )}
        />

      </div> // END OF .app
    )
  }
}

export default BooksApp
