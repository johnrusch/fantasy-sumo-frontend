import React, { Component } from "react";
import { Link } from "react-router-dom"
import { api } from "../services/api";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: "",
        password: "",
      },
    };
  }

  // changes state with the input received in the login form
  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
      e.preventDefault();

      api.auth.login(this.state.fields).then((resp) => {
          if (!resp.error) {
              this.props.onLogin(resp)
              this.props.history.push("/dashboard");
          } else {
              this.setState({ error: true });
          }
      })
  }

  render() {
    const { fields } = this.state;
    return (
      <div className="container mt-5">
        <div className="card col-sm-6">
          {this.state.error ? <h1>Try Again</h1> : null}
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="name"
                  className="form-control"
                  placeholder="Enter username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary btn mt-3 mr-3" type="submit">
                Login
              </button>
              <Link to="/signup">Not a member? Sign up</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
