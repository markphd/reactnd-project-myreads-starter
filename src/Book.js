import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	state = {
		shelf: this.props.shelf,
		key: this.props.key
	}

	onUpdateShelf = (shelf) => {
   		this.setState({shelf})
  	}

	render() {
		const { key, id, shelf, book, cover, updateShelf, title, authors } = this.props
		return(
			<li key={key} className=''>
			  <div className="book">
			    <div className="book-top">
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
			      <div className="book-shelf-changer">
			      	<ShelfChanger 
			      		bookId={id} 
			      		shelf={shelf} 
			      		book={book} 
			      		updateShelf={updateShelf} 
			      		onUpdateShelf={this.onUpdateShelf} 
			      	/>
			      </div>
			    </div>
			    <div className="book-title">{title}</div>
			    <div className="book-authors">{authors}</div>
			  </div>
			</li>
		)
	}
}

export default Book