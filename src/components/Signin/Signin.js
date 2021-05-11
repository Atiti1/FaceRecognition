import React from 'react';


 


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  /*onSubmitSignIn = () => {
    console.log(this.state);
    this.props.onRouteChange('home');
  }*/

  render() {
    const { onRouteChange } = this.props;
    return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
   <article className="pa4 black-80">
  <form   type="submit" accept-charset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <label onClick={this.onSubmitSignIn} className="f1 ph0 mh0 fw6 clip">Sign In</label>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
        <input 
        className="pa2 input-reset ba bg-transparent w-100 measure" 
        type="email" 
        name="email-address"  
        id="email-address" 
        onChange={this.onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent" 
        type="password" 
        name="password"  
        id="password" 
        onChange={this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div 
    className="">
    <input 
    onClick={this.onSubmitSignIn}
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
    type="submit" 
    value="Sign In" 
    />
    </div>
    <div className="1h-copy mt3">
       <p  onClick={() => onRouteChange('Register')} className="f6 link dim black db pointer">Register</p> 
</div>
  </form>
</article>
</article>
   );
  }
}

export default Signin;