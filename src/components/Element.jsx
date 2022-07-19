import React from "react";
import CardDisplay from "./CardDisplay"
import { Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';


export default class Element extends React.Component {
    handleClick = (name) => {
      console.log(`Click! ${name}`)
        if (this.props.clickHandler === undefined){
            return
        }
        this.props.clickHandler(name)
    }
  render() {
    return (
      <Row>
        <Col className="col-1">
          <p>{this.props.id+1}</p>
          </Col>
        <Col className="col-9">
          <CardDisplay
            title={this.props.clip.title}
            duration={this.props.clip.duration}
            creator={this.props.clip.creator}
            view_count={this.props.clip.view_count}
            language={this.props.clip.language}
            game_id={this.props.clip.game_id}
            game={this.props.clip.game}
            created_at={this.props.clip.created_at}
          />
          </Col>
        <Col className="col-2">

        {(() => {
          if (this.props.isCompilation){
            return (
              <div>
              <Button onClick={() => this.handleClick(`Up${this.props.id}`)} className="btn m-1 p-2 btn-primary">Up</Button>
              <Button onClick={() => this.handleClick(`Down${this.props.id}`)} className="btn m-1 p-2 btn-primary">Down</Button>
              </div>
            )
          }
          else {
            return (
          <Button onClick={() => this.handleClick(`Add${this.props.id}`)} className="btn m-1 p-2 btn-warning">Add</Button>
            )
          }
        })()}
          <Button onClick={() => this.handleClick(`Remove${this.props.id}`)} className="btn m-1 p-2 btn-danger">Remove</Button>
          <Button target="_blank" href={this.props.clip.url} className="btn m-1 p-2 btn-info">Link</Button>
        </Col>
      </Row>
    );
  }
};