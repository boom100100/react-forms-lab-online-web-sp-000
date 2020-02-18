<<<<<<< HEAD
import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return;
    this.props.handleLogin({username: this.state.username, password: this.state.password});
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
      
    );
  }
}

export default LoginForm;
=======
import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return;
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
      </div>
    );
  }
}

export default LoginForm;
>>>>>>> bbcd9980d7cb33bc523da41db6b6c99a21b63f24
