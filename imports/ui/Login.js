/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Button from '@material-ui/core/Button';

export default class Login extends React.Component {
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

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: 'No es posible entrar. Chequeá tu email y contraseña' });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (Meteor.userId()) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <p>You must log in to view the page at { from.pathname }</p>
        <h1>Login</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit} noValidate>
          <div class="ui input focus" >
            <input type="email" ref={this.emailRef} name="email" placeholder="Email"/>
          </div>   
          <div class="ui input focus" >
            <input type="password" ref={this.passwordRef} name="password" placeholder="Contraseña" />
          </div>   
          <Button
            variant="raised"
            color="primary"
            type="submit"
          >
            Ingresar
          </Button>
        </form>

        <Link to="/signup">¿Necesitás una cuenta?</Link>
      </div>
    );
  }
}

