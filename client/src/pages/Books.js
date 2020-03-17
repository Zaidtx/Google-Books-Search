import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Form from "../components/Form";
import Book from "../components/Book.js";

class Books extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for the BOOk"
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks(this.state.q).then(res => {
      console.log(res);
      this.setState({
        books: res.data
      });
    });
  };
  handleBookSave = id => {
    const matchedBook = this.state.books.find(book => book.id == id);
    API.saveBook({
      title: matchedBook.volumeInfo.title,
      author: matchedBook.volumeInfo.authors,
      description: matchedBook.volumeInfo.description
    }).then(() => this.loadBooks());
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.tittle}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    Button={() => (
                      <button onClick={() => this.handleBookSave(book.id)}>
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
