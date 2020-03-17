import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Book from "../components/Book";
import List from "../components/List";
import Jumbotron from "../components/Jumbotron";
class Saved extends Component {
  state = {
    savedBooks: []
  };
  componentDidMount() {
    this.getSavedBooks();
  }
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          savedBooks: res.data
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books">
              <List>
                {this.state.savedBooks.map(book => (
                  <Book
                    key={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors}
                    description={book.description}
                  />
                ))}
              </List>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
