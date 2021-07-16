import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

function AuthnForm(props) {
  const handleChange = props.handleChange;
  const mode = props.mode;
  const authorize = props.authorize;
  const state = props.state;

  return (
    <div className='p-field p-col-6 p-md-6 p-mt-5'>
      <div className='card'>

        <div className='p-grid p-mt-2 p-m-0'>
          <div className='p-col'>
            <div className='box'>
              <InputText
                id='emailaddress'
                value={state.username}
                onChange={(e) => handleChange('username', e.target.value)}
                placeholder='Email address'
                type='text'
              />
            </div>
          </div>
        </div>
        
        {mode!=='resetpwd' &&
          <div className='p-grid p-mt-2 p-m-0'>
          <div className='p-col'>
            <div className='box'>
              <InputText
                id='password'
                value={state.password}
                onChange={(e) => handleChange( 'password', e.target.value )}
                placeholder='Password'
                type='password'
              />
            </div>
          </div>
        </div>}
        
        { mode ==='signup' &&
          <div className='p-grid p-mt-2 p-m-0'>
            <div className='p-col'>
              <div className='box'>
                <InputText
                  id='repassword'
                  value={state.repassword}
                  onChange={(e) => handleChange( 'repassword', e.target.value )}
                  placeholder='Re-enter Password'
                  type='password'
                />
              </div>
            </div>
          </div>
        }
        
        { mode ==='login' &&
          <div>
            <Checkbox
              inputId='chkreme'
              onChange={() => handleChange('chkreme',!state.chkreme)}
              checked={state.chkreme}/>
            <label htmlFor='chkreme' className='p-ml-2'>
              Remember Me
            </label>
          </div>
        }
        
        <Button
          label= {mode==='login'?'Login':mode==='signup'?'Sign Up' : 'Reset Password'}
          onClick={() => authorize()}
          className='p-button-info p-mt-2'
        />

        { mode ==='login' &&
          <small>
            <a href='/resetpwd'> Forgot Password?</a>
          </small>
        }

      </div>
    </div>
  );
}

export default AuthnForm;