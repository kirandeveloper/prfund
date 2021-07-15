import React from 'react'; 
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
class Signup extends React.Component {  
  constructor(props) {
      super(props);
		
      this.state = {
        chkreme: false,
        username:"",
        password:""
     }
     this.baseURL='https://p1app.local/api';
     this.onremeChange = this.onremeChange.bind(this);
   };

   onremeChange(e)
   {
      this.setState({chkreme: e.checked});
   }

   signup()
   {
      let username = this.state.username;
      let password = this.state.password;
      let repassword = this.state.repassword;

      if(password===repassword)
      {
        console.log("password match");
      }
      else
      {
        console.log("password not match");
      }
     
      let url = '';
      url = this.baseURL+'/auth/register';

      console.log({username:username,password:password});

      axios.post(url, {username,password}).then(res=>{
          console.log(res.data);
          this.setState({success:res.data.success});          
      }).catch(err=>{
           console.log(err)      
      })     
   }

  render() {
      return (
         <section className="p-grid p-m-0">
            <div className="p-field p-col-6 p-md-6 p-mt-5">
                    <h1>Manage crypto assets like never before</h1>
                    <p>Wether you are an invester or crypto fund manager, we provide you simple way to manage crypto assets. Sign-up now to get started</p>
                </div>
                <div className="p-field p-col-6 p-md-6 p-mt-5">
                  <div className="card">
                    <div className="p-grid p-mt-2 p-m-0">
                        <div className="p-col">
                          <div className="box"><InputText id="emailaddress" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} placeholder="Email address" type="text"/></div>
                        </div>
                    </div>
                    <div className="p-grid p-mt-2 p-m-0">
                        <div className="p-col">
                          <div className="box"><InputText id="password"  value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} placeholder="Password" type="password"/></div>
                        </div>
                        
                   </div>
                   <div className="p-grid p-mt-2 p-m-0">
                        <div className="p-col">
                          <div className="box"><InputText id="repassword"  value={this.state.repassword} onChange={(e)=>this.setState({repassword:e.target.value})} placeholder="Re Password" type="password"/></div>
                        </div>
                   </div>
                   <div>
                        <Checkbox inputId="chkreme" value="New York" onChange={this.onremeChange} checked={this.state.chkreme} ></Checkbox>
                        <label htmlFor="chkreme" className="p-ml-2">Remember Me</label>
                    </div>
                  <Button label="Signup" onClick={()=>this.signup()} className="p-button-info p-mt-2" />
                </div>
                </div>
         </section>
      );
   }  
}  
export default Signup; 