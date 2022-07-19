import React from "react";
import EditElement from "./EditElement";
import Container from 'react-bootstrap/Container';

export default class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1> Edit {this.props.project} </h1>
        <h2> n {this.props.n} </h2>
        <Container>
          {(() => {
            if (this.props.n !== 0) {
              return (
                this.props.clipArray.clips.map(
                  (clip, i) =>
                    <EditElement
                      key={i}
                      clip={clip}
                      clickHandler={this.props.clickHandler}
                      id={i}
                    />
                )
              )
            }
            else {
             return "Empty"
            }
          })()}
        </Container>
      </div>
    );
  }
};
