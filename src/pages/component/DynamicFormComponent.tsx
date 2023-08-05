import React, { ChangeEvent, FormEvent } from "react";
import { Form, Col, Button } from "react-bootstrap";

interface FieldConfig {
  [key: string]: string;
}

interface DynamicFormProps {
  fields: FieldConfig;
  onSubmit: (data: { [key: string]: string }) => any;
}

interface DynamicFormState {
  formData: {
    [key: string]: string;
  };
}

class DynamicFormComponent extends React.Component<
  DynamicFormProps,
  DynamicFormState
> {

  constructor(dynamicProp: DynamicFormProps) {
    super(dynamicProp);
    this.state = {
      formData: {},
    };
  }


  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

  render() {
    const {fields} = this.props;
    const {formData}  = this.state;
    return (
      <>
     <Form onSubmit={this.handleSubmit}>
        {Object.keys(fields).map((key) => {
          const fieldType = fields[key];
          return (
            <Form.Group className="mb-3" as={Col} key={key}>
              <Form.Label htmlFor={key}>{key}</Form.Label>
              {fieldType === 'text' && (
                <Form.Control
                  type="text"
                  name={key}
                  id={key}
                  value={formData[key] || ''}
                  onChange={this.handleChange}
                />
              )}
              {fieldType === 'textarea' && (
                <Form.Control
                  as="textarea"
                  name={key}
                  id={key}
                  value={formData[key] || ''}
                  onChange={this.handleChange}
                />
              )}
            </Form.Group>
          );
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
    );
  }
}

export default DynamicFormComponent;
