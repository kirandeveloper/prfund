import React from 'react';
import axios from 'axios';
import Landing from '../components/Landing';
import AuthnForm from '../components/AuthnForm';
import { Constants } from '../utils/Constants';


class AuthnPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chkreme: false,
        username: '',
        password: '',
        repassword: '',
        success:true,
    };
    this.mode = this.props.mode;
    this.handleChange = this.handleChange.bind(this)
    this.authorize = this.authorize.bind(this)
  }
  componentDidUpdate(){
    console.log('props',this.props)
  }

  authorize() {
    let username = this.state.username;
    let password = this.state.password;
    let url = '';
    if (this.mode === 'signup') {
      url = Constants.BASE_URL + '/auth/register';
      console.log({ username: username, password: password });
      axios
        .post(url, { username, password })
        .then((res) => {
          console.log(res.data);
          this.setState({ success: res.data.success });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.mode === 'login') {
      console.log('login');
      url = Constants.BASE_URL + '/auth/login';
      console.log({ username: username, password: password });
      axios
        .post(url, { username, password })
        .then((res) => {
          console.log(res.data);
          this.setState({ success: res.data.success });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.mode === 'resetpwd') {
      url = Constants.BASE_URL + '/auth/resetrequest';
      console.log({ username: username });
      axios
        .post(url, { username: username })
        .then((res) => {
          console.log(res.data);
          this.setState({ success: res.data.success });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange(key, value) {
    this.setState({[key]: value });
  }

  render() {
    return (
      <section className='p-grid p-m-0'>
        <Landing />
        <AuthnForm
          handleChange={this.handleChange}
          mode={this.mode}
          authorize={this.authorize}
          state={this.state}
        />
      </section>
    );
  }
}
export default AuthnPage;
