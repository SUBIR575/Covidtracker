import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Overall = () => {
  const [totalCase, setTotalCase] = useState('');
  useEffect(() => {
    axios.get('https://api.covid19india.org/data.json')
    .then(res=>{
      setTotalCase(res.data.statewise[0])
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <Card  style={{ width: "18rem",background:'linear-gradient(to right, #ffffff 47%, #006666 100%)' }}>
            <Card.Header className="no_title">Total Confirmed</Card.Header>
              <Card.Body>
                <Card.Title className="no_title"><h2>{totalCase.confirmed}</h2></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card  style={{ width: "18rem", background:'linear-gradient(to right, #ffffff 47%, #9999ff 100%)' }}>
            <Card.Header className="no_title">Total Recovered</Card.Header>
              <Card.Body>
                <Card.Title className="no_title"><h2>{totalCase.recovered} </h2></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem", background:'linear-gradient(to right, #ffffff 47%, #666633 100%)' }}>
            <Card.Header className="no_title">Total Deceased</Card.Header>
              <Card.Body>
                <Card.Title className="no_title"><h2>{totalCase.deaths} </h2></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overall;
