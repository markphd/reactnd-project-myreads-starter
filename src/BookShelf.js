import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {
	state = {
		shelf: []
	}

	componentDidMount(){
		BooksAPI.getAll().then((shelf) => {
			// this.setState({ shelf: books.filter( (shelf) =>    )})
			this.setState({ shelf })
		})
	}

	render() {
    let currentlyReadingShelf = this.state.shelf.filter((book) => book.shelf === 'currentlyReading')
    let wantToReadShelf = this.state.shelf.filter((book) => book.shelf === 'wantToRead')
    let readShelf = this.state.shelf.filter((book) => book.shelf === 'read')

		return(
      <main>
			<div className="bookshelf">
         <h2 className="bookshelf-title">Currently Reading</h2>
         <div className="bookshelf-books">
          <ol className="books-grid">
            { currentlyReadingShelf.map((book) => (
              <li key={book.industryIdentifiers[0].identifier} className=''>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.subtitle}</div>     
                </div>
              </li>
            ))}
          </ol>
         </div>
       </div>

            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   { wantToReadShelf.map((book) => (
                     <li key={book.industryIdentifiers[0].identifier} className=''>
                       <div className="book">
                         <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                           <div className="book-shelf-changer">
                             <select>
                               <option value="none" disabled>Move to...</option>
                               <option value="currentlyReading">Currently Reading</option>
                               <option value="wantToRead">Want to Read</option>
                               <option value="read">Read</option>
                               <option value="none">None</option>
                             </select>
                           </div>
                         </div>
                         <div className="book-title">{book.title}</div>
                         <div className="book-authors">{book.subtitle}</div>     
                       </div>
                     </li>
                   ))}
                 </ol>
                </div>
              </div>

                    <div className="bookshelf">
                       <h2 className="bookshelf-title">Read</h2>
                       <div className="bookshelf-books">
                        <ol className="books-grid">
                          { readShelf.map((book) => (
                            <li key={book.industryIdentifiers[0].identifier} className=''>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.subtitle}</div>     
                              </div>
                            </li>
                          ))}
                        </ol>
                       </div>
                     </div>
                     </main>
		)
	}
}

export default BookShelf