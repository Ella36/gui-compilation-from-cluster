import React from "react";
import Button from 'react-bootstrap/Button';

export default class Footer extends React.Component {
    handleClick = (name) => {
        console.debug(`Click: ${name}`);
        if (this.props.clickHandler === undefined){
          console.debug("undefined");
            return
        }
        this.props.clickHandler(name)
    }
render() {
  return(
    <div className="footer">
      <footer className="py-2 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-1 p-1 text-center text-white">
            Duration: 600
            Videos: 13
            <code className="m-1">Edit ./compilation.json</code>
            <Button onClick={() => this.handleClick("ReadCompilation")} className="btn m-1 p-2 btn-success">Read compilation.json</Button>
            <Button onClick={() => console.debug("Write")} className="btn m-1 p-2 btn-danger">Write JSON</Button>
          </p>
        </div>
      </footer>
    </div>
  );
}};