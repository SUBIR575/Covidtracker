import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

const WestBengal = () => {
  const [wbTotal, setWbTotal] = useState('');
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => {
        setWbTotal(res.data["West Bengal"].districtData)
        console.log(res.data["West Bengal"].districtData)
        
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
          
        </Table>
        </div>
      </Container>
    </>
  );
};

export default WestBengal;
