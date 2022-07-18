import React from "react";
import Button from 'react-bootstrap/Button';

export default class Footer extends React.Component {
render() {
  return(
    <div className="footer">
      <footer className="py-2 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-1 p-1 text-center text-white">
            Copyright &copy; Your Website 2022
            <code className="m-1">Edit ./compilation.json</code>
            <Button className="btn m-1 p-2 btn-success">Read JSON</Button>
            <Button className="btn m-1 p-2 btn-danger">Write JSON</Button>
          </p>
        </div>
      </footer>
    </div>
  );
}};