import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // console.log(firstName) checking ng tinatype sa input field
  // console.log(lastName)

  const history = useHistory();

  const sendDataToAPI = () => {
    axios.post(`https://633d7113f2b0e623dc73e67b.mockapi.io/crud`, {
      firstName: firstName,
      lastName: lastName
    }).then(() => {
      history.push('/read')
    })
  }

  return (
    <Form>
      <Form.Field>
        <label style={{color: 'white'}}>First Name</label>
        <input 
          name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label style={{color: 'white'}}>Last Name</label>
        <input 
          name="lname" 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button onClick={sendDataToAPI} type='submit'>Submit</Button>
    </Form>
  );
};

export default Create;
