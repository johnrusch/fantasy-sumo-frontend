import React from "react";

class Signup extends React.Component {
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

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };


    handleSubmit = e => {
        e.preventDefault()
        this.props.signUp(this.state.fields)
        this.props.history.push('/');
    }

  render() {
    const { fields } = this.state;
    return (
      <div className="container mt-5">
        {/* <Jumbotron /> */}
        <div className="card col-sm-6">
          {this.state.error ? <h1>Try Again</h1> : null}
          <div className="card-body">
            <h5 className="card-title">Create an account!</h5>
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
              <button className="btn btn-primary btn mt-3" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
