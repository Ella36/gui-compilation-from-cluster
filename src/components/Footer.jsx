import React from "react";


export default class Footer extends React.Component {
render() {
  return(
    <div className="footer">
      <footer className="py-2 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}};