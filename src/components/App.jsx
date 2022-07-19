import React from "react";
import Container from 'react-bootstrap/Container';

import Select from './Select';
import Edit from './Edit';
import Footer from "./Footer"
import manipulate from "../logic/manipulate"


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { compilation: [] };
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
              <Edit compilation={this.state.compilation} />
            </div>
          </div>
    <Footer clickHandler={this.handleClick} />
      </Container>
    );
  }
};