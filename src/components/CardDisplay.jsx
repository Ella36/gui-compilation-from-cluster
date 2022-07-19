import React from "react";
import Card from 'react-bootstrap/Card';

export default class CardDisplay extends React.Component {
  render() {
  return (
    <div className="col-12 m-2">
    <Card className="bg-dark text-dark col-12 m-2">
      <Card.Img src="./placeholder.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{this.props.creator} </Card.Title>
        <Card.Text>
{this.props.title}
        </Card.Text>
        <Card.Text>
           {Number(this.props.view_count).toLocaleString()} {this.props.duration} {this.props.language}
            </Card.Text>
        <Card.Text>
          {this.props.game} {this.props.game_id} 
        </Card.Text>
        <Card.Text>{this.props.created_at}</Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
  );
}
};