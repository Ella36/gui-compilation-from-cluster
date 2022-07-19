import React from "react";
import SelectElement from "./SelectElement";
import Container from 'react-bootstrap/Container';

export default class Edit extends React.Component {
render () {
  return (
        <div>
          <h1> Edit {this.props.compilation.project} </h1>
          <h2> n {this.props.compilation.n} </h2>
          <Container>
          {[...Array(10)].map((x, i) => <SelectElement id={i+1} key={i} />)}
        </Container>
        </div>
  );
}};
