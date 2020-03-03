import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from "../List";
import { Col, Row, Container } from "../components/Grid";
const Book = props => {
    return (
       <ListItem>
           <Row >
               <Col size="md-12">
                   <h2>{props.title}</h2>
                   <a target="_black" href={props.link}>View</a>
                   <h2>Written By {props.authors}</h2>
                   <p>{props.description}</p>
               </Col>
           </Row>
       </ListItem>
    );
};

Book.propTypes = {
    
};

export default Book;