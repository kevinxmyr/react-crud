import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Update() {
  let history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID, setID] = useState(null);

  // console.log(firstName) checking ng tinatype sa input field
  // console.log(lastName)

  const sendDataToAPI = () => {
    axios.put(`https://633d7113f2b0e623dc73e67b.mockapi.io/crud/${ID}`, {
      firstName: firstName,
      lastName: lastName
    }).then(() => {
      history.push('/read')
    })
  }

useEffect(() => {
  setFirstName(localStorage.getItem('firstName'));
  setLastName(localStorage.getItem('lastName'));
  setID(localStorage.getItem('ID'))
}, [])

  return (
    <Form>
      <Form.Field>
        <label style={{color: 'white'}}>First Name</label>
        <input 
          value={firstName}
          name="fname"
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label style={{color: 'white'}}>Last Name</label>
        <input 
          value={lastName}
          name="lname"
          onChange={(e) => setLastName(e.target.value)} 
          placeholder='Last Name' />
      </Form.Field>
      <Button onClick={sendDataToAPI} type='submit'>Update</Button>
    </Form>
  );
};