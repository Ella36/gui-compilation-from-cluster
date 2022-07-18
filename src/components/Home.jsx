import React from "react";
import Button from 'react-bootstrap/Button';


function readFile() {
}

export default class Home extends React.Component {
  readFile = function(){
    let file = window.electron.readFile('file-to-read.txt')
}
  writeFile = function(){
    window.electron.writeFile('file-to-write.txt', 'hello wurld!')
}

  render () {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
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
        </div>
      </div>
    </div>
  );
}};
