import React from "react";
import Element from "./Element";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1> Edit {this.props.project} </h1>
        <Container>
          {this.props.compilationArray.clips.map(
            (clip, i) =>
              <Element
                key={i}
                clip={clip}
                clickHandler={this.props.clickHandler}
                isCompilation={true}
                id={i}
              />)}
          <Row>
            <Col className="col-9">
              <div className="col-12">
                <Card className="bg-dark text-light m-1 col-12">
                  <Card.Body>
                    <Card.Text className="text-dark"> {"Placeholder"} </Card.Text>
                    <Card.Text className="text-dark"> {"Placeholder"} </Card.Text>
                    <Card.Text className="text-dark"> {"Placeholder"} </Card.Text>
                    <Card.Text > {"Placeholder"} </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="col-2">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
