import React from "react";
import Button from 'react-bootstrap/Button';
//https://github.com/json-editor/json-editor

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
      <div className="settings">
        <div className="container">
          <div className="row align-items-center mt-5 p-2">
            <h1 className="font-weight-light">Home page</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button onClick={this.readFile} variant="primary">Read</Button>
            <Button onClick={this.writeFile} variant="primary">Write</Button>
          </div>
          <div>
            <p> editor here</p>
          </div>
        </div>
      </div>
    );
  }
};
