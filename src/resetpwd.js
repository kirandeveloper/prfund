import React from 'react'; 
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
class Resetpwd extends React.Component {  
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

   resetpwd()
   {
      let username = this.state.username;
      
      let url = '';
      url = this.baseURL+'/auth/resetrequest';

      console.log({username:username})

      axios.post(url, {username}).then(res=>{
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
                  <Button label="Login" onClick={()=>this.resetpwd()} className="p-button-info p-mt-2" />
                </div>
                </div>
         </section>
      );
   }  
}  
export default Resetpwd; 