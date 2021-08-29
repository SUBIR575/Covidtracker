import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Tracker = () => {
  const [CoData, newCoData] = useState('');

  useEffect(() => {
     axios.get('https://api.covid19india.org/data.json')
     .then(res=>{
       newCoData(res.data.cases_time_series[res.data.cases_time_series.length - 1])
     })
     .catch(error=>{
       console.log(error)
     })
  });

  return (
    <>
      <Container>
        <Row>
          <Col sm>
            <Card
              style={{
                width: "18rem",
                background:
                  "linear-gradient(to right, #ffffff 41%, #ffff99 100%)",
              }}
              className="card"
            >
              <Card.Header className="no_title">Today Confirmed</Card.Header>
              <Card.Body>
                <Card.Title className="no_title">
                  <h2>{CoData.dailyconfirmed}</h2>
                </Card.Title>
                <h6 className="no_title">Last Update {CoData.date}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card
              style={{
                width: "18rem",
                background:
                  "linear-gradient(to right, #ffffff 47%, #cc9900 100%)",
              }}
              className="card"
            >
              <Card.Header className="no_title">Today Recovered</Card.Header>
              <Card.Body>
                <Card.Title className="no_title">
                  <h2> {CoData.dailyrecovered} </h2>
                </Card.Title>
                <h6 className="no_title">Last Update {CoData.date}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card
              style={{
                width: "18rem",
                background:
                  "linear-gradient(to right, #ffffff 47%, #cc6699 100%)",
              }}
              className="card"
            >
              <Card.Header className="no_title">Today Deceased</Card.Header>
              <Card.Body>
                <Card.Title className="no_title">
                  <h2>{CoData.dailydeceased}</h2>
                </Card.Title>
                <h6 className="no_title">Last Update {CoData.date}</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tracker;
