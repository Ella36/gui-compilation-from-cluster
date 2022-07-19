import React from "react";
import Card from 'react-bootstrap/Card';

export default class CardDisplay extends React.Component {
  render() {
    return (
      <div className="col-12">
        <Card className="bg-dark text-light m-1 col-12">
          <Card.Img variant="left" src={this.props.img} alt="Card image" />
          <Card.Body>
            <Card.Title>{this.props.id} {this.props.creator} {this.props.game} </Card.Title>
            <Card.Text> {this.props.title} </Card.Text>
            <Card.Text>
              {Number(this.props.view_count).toLocaleString()} {this.props.duration}s {this.props.language} {this.props.created_at} {this.props.game_id}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};