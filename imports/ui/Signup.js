/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {
      error: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const email = this.emailRef.current.value.trim();
    const password = this.passwordRef.current.value.trim();

    if (password.length < 9) {
      return this.setState({ error: 'La contraseña debe tener más de 8 letras' });
    }

    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });

    return undefined;
  }

  render() {
    return (
      <div>
        <h1>Regístrate</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit} noValidate>
          <input type="email" ref={this.emailRef} name="email" placeholder="Email" />
          <input type="password" ref={this.passwordRef} name="password" placeholder="Contraseña" />
          <button>Regístrame</button>
        </form>

        <Link to="/login">¿Ya tienes cuenta?</Link>
      </div>
    );
  }
}
