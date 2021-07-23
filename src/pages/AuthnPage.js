import React from 'react';
import Landing from '../components/Landing';
import AuthnForm from '../react-components/AuthnForm';
import { Constants } from '../utils/Constants';

const AuthnPage = (props) => {
  return (
    <section className='p-grid p-m-0'>
      <Landing />
      <AuthnForm mode={props.mode} constants={Constants} />
    </section>
  );
}
export default AuthnPage;
