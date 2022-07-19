import React from "react";
import CardDisplay from "./CardDisplay"
import { Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

export default class SelectElement extends React.Component {
  render() {
    return (
      <Row>
        <Col className="col-1">
          <p>{this.props.id}</p>
          </Col>
        <Col className="col-9">
          <CardDisplay Title="test"></CardDisplay>
          </Col>
        <Col className="col-2">
          <Button className="btn m-1 p-2 btn-success">Add</Button>
          <Button className="btn m-1 p-2 btn-danger">Remove</Button>
          <Button className="btn m-1 p-2 btn-info">Link</Button>
        </Col>
      </Row>
    );
  }
};