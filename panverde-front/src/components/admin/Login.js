import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";

class Login extends Component {
  state = {
    auth: {
      email: "",
      password: ""
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { auth } = this.state;
    if (auth.email.length === 0) {
      return this.setState({ error: "You must enter a email" });
    }
    this.onLogin();
    console.log('local Storage desde Login.js: ', window.localStorage)
  };

  onLogin = () => {
    
     const { auth } = this.state;
     console.log('props desde Login.js: ', this.props)
    login(auth)
      .then(({ token, user }) => {
        if (user['role'] === 'admin') {
          this.props.history.push("/admin");
          console.log('admin', this.props.history)
        
          localStorage.setItem("TOKEN", token);
          localStorage.setItem("USER", JSON.stringify(user));
          this.props.setUser(user);
        } else {
          console.log('No eres user')
        }

       
        
      })
      .catch(error => {
        console.log('el error login ',error)
        return this.setState({ error: error.message });
      });
  };

  handleChange = e => {
    const { auth } = this.state
    let field = e.target.name
    auth[field] = e.target.value
    this.setState({ auth })
  }

  render() {
    const {email, password, error} = this.state.auth;
    return (
      <div className="custom-form main-container uk-section">
        <div className="uk-container">
            <div className="uk-align-justify">
                    <h2>Log In</h2>
                  <form className="uk-form-stacked" onSubmit={this.handleFormSubmit}>
                    <p>
                      <input
                        className="uk-input uk-form-width-medium"
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </p>
                    <p>
                      <input
                        className="uk-input uk-form-width-medium"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </p>
                    {error && (
                          <div className="uk-alert-danger" uk-alert="true">
                              <p>{error}</p>
                          </div>
                      )}
                    <p>
                      <input
                        className="uk-button uk-button-primary"
                        type="submit"
                        value="Login"

                      />
                    </p>
                  </form>
                  <p>
                    Don't have an account?
                    <Link to={"/register"}> Signup</Link>
                  </p>
              </div>
            </div>
        </div>
        
    );
  }
}
export default Login;