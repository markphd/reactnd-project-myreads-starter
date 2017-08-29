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
		return(
			<li key={this.props.key} className=''>
			  <div className="book">
			    <div className="book-top">
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
			      <div className="book-shelf-changer">
			      	<ShelfChanger 
			      		bookId={this.props.id} 
			      		shelf={this.props.shelf} 
			      		book={this.props.book} 
			      		updateShelf={this.props.updateShelf} 
			      		onUpdateShelf={this.onUpdateShelf} 
			      	/>
			      </div>
			    </div>
			    <div className="book-title">{this.props.title}</div>
			    <div className="book-authors">{this.props.authors}</div>
			  </div>
			</li>
		)
	}
}

export default Book