import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Read() {
  const history = useHistory();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://633d7113f2b0e623dc73e67b.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getData = () => {
    axios.get(`https://633d7113f2b0e623dc73e67b.mockapi.io/crud`)
    .then((getData) => {
      setApiData(getData.data)
    })
  }

  const onDelete = (id) => {
    axios.delete(`https://633d7113f2b0e623dc73e67b.mockapi.io/crud/${id}`)
    .then(() => {
      getData();
    }).then(() => {
      history.push('/read')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const setID = (id, firstName, lastName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Number</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>update</Table.HeaderCell>
            <Table.HeaderCell>delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell positive>{data.firstName}</Table.Cell>
                <Table.Cell negative>{data.lastName}</Table.Cell>
                <Table.Cell negative>
                  <Link to='/update'>
                    <Button 
                      onClick={() => {
                        setID(data.id, data.firstName, data.lastName)
                        }}
                      color='green'>update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell negative>
                  <Link to='/delete'>
                    <Button
                      onClick={() => onDelete(data.id)}
                      color='red'>delete</Button> 
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
