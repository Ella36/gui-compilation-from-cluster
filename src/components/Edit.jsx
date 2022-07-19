import React from "react";
import Element from "./Element";
import Container from 'react-bootstrap/Container';

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
        </Container>
      </div>
    );
  }
};
