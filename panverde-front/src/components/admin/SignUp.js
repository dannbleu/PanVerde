import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/auth";

class Signup extends Component {
  state = {
    auth: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { auth } = this.state;
    if (!auth.email.length) {
      return this.setState({ error: "You must enter an email" });
    }
    this.onSignup();
  };

  onSignup = () => {
    const { auth } = this.state;
    register(auth)
      .then(({ token, user }) => {
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        this.props.getUser(user);
        this.props.history.push("/");
      })
      .catch(error => {
        return this.setState({ error: error.message });
      });
  };

  handleChange = e => {
    const { auth } = this.state;
    let field = e.target.name;
    auth[field] = e.target.value;
    this.setState({ auth });
    console.log(auth)
  };

  render() {
    const {name, lastname, email, username, password} = this.state.auth
    return (
      <div className="auth-form main-container">
        <h2>Sign Up</h2>
        <form className="uk-form-stacked" onSubmit={this.handleFormSubmit}>
          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="First Name"
              type="text"
              name="name"
              value={name}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Last Name"
              type="text"
              name="lastname"
              value={lastname}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-input uk-form-width-medium"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={e => this.handleChange(e)}
            />
          </p>

          <p>
            <input
              className="uk-button uk-button-primary"
              type="submit"
              value="Signup"
            />
          </p>
        </form>

        <p>
          Already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;