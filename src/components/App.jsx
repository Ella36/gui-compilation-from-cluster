import React from "react";
import Container from 'react-bootstrap/Container';

import Select from './Select';
import Edit from './Edit';
import Footer from "./Footer"
import manipulate from "../logic/manipulate"
import ClipArray from "../logic/ClipArray"


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0,
      project: "untitled",
      clipArray: new ClipArray(),
    };
  }

  handleClick = async (buttonName) => (
      this.setState(await manipulate(this.state, buttonName))
    );

  render() {
    return (
        <Container fluid="md">
          <div className="row px-3 fixed-top h-100">
            <div className="col-7 overflow-auto h-100">
              <Select />
            </div>
            <div className="col-5 overflow-auto h-100">
              <Edit
               n={this.state.n}
               project={this.state.project}
               clipArray={this.state.clipArray}
               clickHandler={this.handleClick}
               />
            </div>
          </div>
    <Footer clickHandler={this.handleClick} />
      </Container>
    );
  }
};