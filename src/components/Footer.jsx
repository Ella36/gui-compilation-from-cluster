import React from "react";


export default class Footer extends React.Component {
render() {
  return(
    <div className="footer">
      <footer class="py-2 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}};