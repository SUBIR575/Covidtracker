import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

const IndiaReport = () => {
  const [stateTotal, setStateTotal] = useState([ ]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        setStateTotal(res.data.statewise);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <>
      <Container style={{ marginTop: "4%", marginBottom: "50px" }}>
      <div style={{textAlign:'center',marginBottom:'20px'}}>
        <h2>Indian Statewise Report</h2>
      </div>
      <div className="res-table">
        <Table responsive className="tab-res">
          <thead className='thead-dark'>
            <tr>
              <th>State</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
         { stateTotal.map((curr,index) => {
                return(
                  <tr>
              <td>{curr.state}</td>
              <td>{curr.active}</td>
              <td>{curr.confirmed}</td>
              <td>{curr.recovered}</td>
              <td>{curr.deaths}</td>
              <td>{curr.lastupdatedtime}</td>
            </tr>
                )
          })
         }
          </tbody>
        </Table>
        </div>
      </Container>
    </>
  );
};

export default IndiaReport;
