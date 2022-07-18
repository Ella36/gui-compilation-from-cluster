import React from "react";

export default class About extends React.Component {
render () {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center mt-5 p-2">
          <div>
            <h1 className="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}};