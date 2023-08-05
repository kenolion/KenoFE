import React from "react";
import DynamicFormComponent from "./DynamicFormComponent";
import {useNavigate } from 'react-router-dom';

const AddPostComponent = () => {
  let navigate = useNavigate();

  const formFields = {
    title: "text",
    content: "textarea",
  };

  const submit = (formData: any) => {

    const form = {authorEmail:"veikeith13@gmail.com",...formData};
    
    const response = fetch("http://localhost:4000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      navigate("/home");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    console.log(response);
  }

  return (
    <>
      <DynamicFormComponent fields={formFields} onSubmit={submit} />
    </>
  );
}


export default AddPostComponent;
