import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  // set new state to collect all the users data, submittedData holds all input values
  const [submittedData, setSubmittedData] = useState([])

  // add state for holding error message
  const [error, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()

    // first name is required
    if (firstName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName:lastName
      }
    
      const dataArray = [...submittedData, formData] // every time the form is submitted, add the new data into dataArray.
      // console.log(dataArray) // an array with firstname and lastname of all users
      setSubmittedData(dataArray)
      setFirstName("");
      setLastName("");
      setErrors([])
    } else {
      setErrors(["First name is required!"])
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
