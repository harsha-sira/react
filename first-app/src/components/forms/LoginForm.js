import React, { Component } from "react";
import { Form, Button, FormField } from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.pasword = "Enter password";
    return errors;
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  render() {
    const { data } = this.state;
    return (
      <Form onSubmit={this.submit}>
        <FormField>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            name="email"
            value={data.email}
            onChange={this.onChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
        </FormField>
        <Button primary> Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
