import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loggingIn } from "../actions/authActions";
import { addAuth } from "../actions/authActions";

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
    console.log(this.state.fields);
    this.props.loggingIn(this.state.fields)
    // .then(auth => {
    //   console.log(auth)
    //   if (!auth.error) {
    //       localStorage.setItem("token", auth.jwt)
    //       this.props.addAuth(auth)
    //     } else {
    //       this.props.history.push('/login')
    //     }
        this.props.history.push("/");
  
  };

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

// const mapDispatchToProps = dispatch => {
//   return {
//     loggingIn: () => dispatch(loggingIn()),
//     addAuth: () => dispatch(addAuth())
//   }
// }

export default connect(null, { loggingIn })(Login);
