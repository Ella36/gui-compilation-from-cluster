import React from "react";
import Container from 'react-bootstrap/Container';

import Select from './Select';
import Edit from './Edit';

export default class Settings extends React.Component {
  readFile = function () {
    let file = window.electron.readFile('file-to-read.txt')
  }
  writeFile = function () {
    window.electron.writeFile('file-to-write.txt', 'hello wurld!')
  }

  constructor(props) {
    super(props);
    this.state = {
      json: undefined /*  setup here or load elsewhere */
    }
  }

  callback = (changes) => {
    this.setState({ json: changes });
  };

  render() {
    return (
        <Container fluid="md">
          <div className="row px-3 fixed-top h-100">
            <div className="col-9 overflow-auto h-100">
              <Select />
            </div>
            <div className="col-3 overflow-auto h-100">
              <Edit />
            </div>
          </div>
      </Container>
    );
  }
};