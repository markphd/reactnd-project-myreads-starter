import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchInput extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})

		this.props.searchBooks(query)
		this.props.isQueryEmpty(query.length > 0)
	}
	
	render() {
		return(
			<div className="search-books-bar">
			  <Link to="/" className="close-search" onClick={() => {}}>Close</Link>
			  <div className="search-books-input-wrapper">
			    <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />
			  </div>
			  <button>Show All</button>
			</div>
		)
	}
}

export default SearchInput