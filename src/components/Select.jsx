import React from "react";
import Element from "./Element";
import Container from 'react-bootstrap/Container';

export default class Select extends React.Component {
  render() {
    return (
      <div>
        <h1> Select {this.props.project} </h1>
        <Container>
          {
            this.props.clipsArray.clips.slice(10).map(
              (clip, i) =>
                <Element
                  key={i}
                  clip={clip}
                  clickHandler={this.props.clickHandler}
                  id={i}
                />
            )
          }
        </Container>
      </div>
    );
  }
};
