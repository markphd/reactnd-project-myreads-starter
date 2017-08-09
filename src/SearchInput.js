import React, { Component } from 'react'

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
			  <a className="close-search" onClick={() => {}}>Close</a>
			  <div className="search-books-input-wrapper">
			    <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />
			  </div>
			  <button>Show All</button>
			</div>
		)
	}
}

export default SearchInput