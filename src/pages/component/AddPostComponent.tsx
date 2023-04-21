import React from "react";
import DynamicFormComponent from "./DynamicFormComponent";
import {Routes, Route, useNavigate} from 'react-router-dom';

interface AddPostProp {}
interface AddPostState {}

class AddPostComponent extends React.Component<AddPostProp, AddPostState> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const [title, setTitle] = React.useState(posts);
  formFields = {
    title: "text",
    content: "textarea",
  };

  constructor(addPost: AddPostProp) {
    super(addPost);
    this.state = {
      data: null,
      loading: false,
    };
  }
  //submit's http://localhost:4000/add POST api
  submit = (formData: any) => {
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
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    console.log(response);
  }

  // async componentDidMount() {
  //   const response = await fetch("http://localhost:4000/post");  //
  //       if (!response.ok) {
  //     throw new Error("Error fetching data");
  //   }
  //   const jsonData = await response.json();
  //  // const response = require("../../Resource/temp.json");


  //  // const jsonData = response.data; //await response.json();

  //   this.setState({ data: jsonData, loading: false });
  // }

  render() {
    return (
      <>
        <DynamicFormComponent fields={this.formFields} onSubmit={this.submit} />
      </>
    );
  }
}

export default AddPostComponent;
