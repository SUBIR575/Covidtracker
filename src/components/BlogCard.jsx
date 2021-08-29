import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogCard = (props) => {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button href={props.btn} variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
