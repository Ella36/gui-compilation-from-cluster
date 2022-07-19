import React from "react";
import CardDisplay from "./CardDisplay"
import { Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';


export default class Element extends React.Component {
    handleClick = (name) => {
      console.debug(`Click! ${name}`)
        if (this.props.clickHandler === undefined){
            return
        }
        this.props.clickHandler(name)
    }
  render() {
    return (
      <Row>
        <Col className="col-9">
          <CardDisplay
            created_at={this.props.clip.created_at}
            creator={this.props.clip.creator}
            duration={this.props.clip.duration}
            game={this.props.clip.game}
            game_id={this.props.clip.game_id}
            id={this.props.id+1}
            img={this.props.clip.thumbnail_url}
            language={this.props.clip.language}
            title={this.props.clip.title}
            view_count={this.props.clip.view_count}
          />
          </Col>
        <Col className="col-2">

          {(() => {
            if (this.props.isCompilation) {
              return (
                <div>
                  <Button onClick={() => this.handleClick(`Up${this.props.id}`)} className="btn m-1 p-2 btn-primary">Up</Button>
                  <Button onClick={() => this.handleClick(`Down${this.props.id}`)} className="btn m-1 p-2 btn-primary">Down</Button>
                  <Button onClick={() => this.handleClick(`Remove${this.props.id}`)} className="btn m-1 p-2 btn-danger">Remove</Button>
                </div>
              )
            }
            else {
              return (
                <div>
                  <Button onClick={() => this.handleClick(`Add${this.props.id}`)} className="btn m-1 p-2 btn-success">Add</Button>
                  <Button onClick={() => this.handleClick(`ClipsRemove${this.props.id}`)} className="btn m-1 p-2 btn-danger">Remove</Button>
                </div>
              )
            }
          })()}
          <Button target="_blank" href={this.props.clip.url} className="btn m-1 p-2 btn-info">Link</Button>
        </Col>
      </Row>
    );
  }
};