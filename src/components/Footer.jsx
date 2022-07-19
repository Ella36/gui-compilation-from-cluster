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
      <footer className="py-2 fixed-bottom bg-dark">
        <div className="container">
          <p className="m-1 p-1 text-center text-white">
            <code className="m-1">
              Duation: {this.props.compilationArray.totalDuration}
            </code>
            <code className="m-1">
              Videos:  {this.props.compilationArray.amountOfClips}
            </code>
            <code className="m-1">
              Freq:  {JSON.stringify(this.props.compilationArray.frequency)}
            </code>
            <Button onClick={() => this.handleClick("ReadClips")} className="btn m-1 p-2 btn-success">Read clips.json</Button>
            <Button onClick={() => this.handleClick("ReadCompilation")} className="btn m-1 p-2 btn-warning">Read compilation.json</Button>
            <Button onClick={() => this.handleClick("SaveCompilation")} className="btn m-1 p-2 btn-danger">Save compilation.csv</Button>
          </p>
        </div>
      </footer>
    </div>
  );
}};