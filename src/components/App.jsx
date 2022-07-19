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
      compilationArray: new ClipArray(),
      thumbnails: [],
      clipsArray: new ClipArray(),
      hasMore: true,
    };
  }

  handleClick = async (buttonName) => (
      this.setState(await manipulate(this.state, buttonName))
    );

  render() {
    return (
      <Container fluid="md">
        <div className="row fixed-top h-100">
          <div id="scrollableSelection" className="col-6 overflow-auto h-100">
            <Select
              n={this.state.n}
              project={this.state.project}
              clipsArray={this.state.clipsArray}
              clickHandler={this.handleClick}
              thumbnails={this.state.thumbnails}
              hasMore={this.hasMore}
            />
          </div>
          <div className="col-6 overflow-auto h-100">
            <Edit
              n={this.state.n}
              project={this.state.project}
              compilationArray={this.state.compilationArray}
              clickHandler={this.handleClick}
            />
          </div>
        </div>
        <Footer
          compilationArray={this.state.compilationArray}
          clickHandler={this.handleClick} />
      </Container>
    );
  }
};