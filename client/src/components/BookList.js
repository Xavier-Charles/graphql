import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../Queries/queries.js';

class BookList extends Component {
	dispalyBooks() {
		let data = this.props.data;
		if (data.loading) {
			return <div>Loading books...</div>;
		} else {
			return data.books.map((book) => {
				return <li key={book.id}>{book.name}</li>;
			});
		}
	}
	render() {
		return (
			<div>
				<ul id="book-list">{this.dispalyBooks()}</ul>
			</div>
		);
	}
}

export default graphql(getBooksQuery)(BookList);
