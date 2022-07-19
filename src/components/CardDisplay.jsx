import React from "react";
import Card from 'react-bootstrap/Card';

export default class CardDisplay extends React.Component {
  render() {
  return (
    <div className="col-12 m-2">
    <Card className="bg-dark text-dark col-12 m-2">
      <Card.Img src="./placeholder.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.duration}s {Number(this.props.view_count).toLocaleString()} {this.props.language}
          {this.props.game} {this.props.game_id}
        </Card.Text>
        <Card.Text>{this.props.created_at}</Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
  );
}
};