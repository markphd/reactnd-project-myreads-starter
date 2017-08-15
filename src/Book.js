import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	state = {
		shelf: this.props.shelf,
		dummy: '',
		key: this.props.key
	}

	// const filterItems = (query) => {
	// return fruits.filter((el) =>
	//   el.toLowerCase().indexOf(query.toLowerCase()) > -1
	// );
	// }

	// temp0.filter(function(el){return el.industryIdentifiers[0].identifier === "1786462494"})

	// componentDidMount() {
	//   this.setState({ currentlyReading: this.props.books.filter((book) => book.shelf === 'currentlyReading')})
	// }


	onUpdateShelf = (shelf) => {
   		console.log('update shelf fired!', shelf)
   		this.setState({shelf})
  	}

	render() {
		return(
			<li key={this.props.key} className=''>
			  <div className="book">
			    <div className="book-top">
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
			      <div className="book-shelf-changer">

			      	<ShelfChanger history={this.props.history} bookId={this.props.id} shelf={this.props.shelf} book={this.props.book} updateShelf={this.props.updateShelf} onUpdateShelf={this.onUpdateShelf} />
			      </div>
			    </div>
			    <div className="book-title">{this.props.title}</div>
			    <div className="book-authors">{this.props.authors}</div>
			    {console.log(this.state.shelf)}
			  </div>
			</li>
		)
	}
}

export default Book