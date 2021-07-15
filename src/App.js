import React, {useState} from 'react';
import './App.css';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Home from './home';
import Feature from './feature';
import Pricing from './pricing';
import About from './about';
import Faqs from './faqs';
import Login from './login';
import Signup from './signup';
import Resetpwd from './resetpwd';

class App extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         
      }
   }


   render() {

        const items = [
        {
           label:'Home',  
           className: "p-menuitem-active",
           command:()=>{ window.location="/home"; },
        },
        {
           label:'Feature',   
           command:()=>{ window.location="/feature"; },
        },
        {
           label:'Pricing', 
           command:()=>{ window.location="/pricing"; },      
        },
        {
           label:'Faqs',   
           command:()=>{ window.location="/faqs"; },    
        },
        {
           label:'About',
           command:()=>{ window.location="/about"; },
        }
     ];
     
      return (
        <Router>
          <div className="App">
              <header className="p-grid p-m-0">
                  <div className="p-field p-col-10 p-md-8">
                    <Menubar model={items}/>
                  </div>
                  <div className="p-field p-col-2  p-md-4">
                        <Button label="Login" onClick={()=>{ window.location="/login"; }} className="p-button-info p-col-3 p-mt-21" />
                        <Button label="Sign-up" onClick={()=>{ window.location="/signup"; }} className="p-button-info p-mt-2 p-ml-2 p-col-3" />
                  </div>
              </header>
              <section className="p-grid p-m-0">
                <Switch>
                  <Route exact path='/login' component={Login}></Route>
                  <Route exact path='/signup' component={Signup}></Route>
                  <Route exact path='/home' component={Home}></Route>
                  <Route exact path='/feature' component={Feature}></Route>
                  <Route exact path='/pricing' component={Pricing}></Route>
                  <Route exact path='/faqs' component={Faqs}></Route>
                  <Route exact path='/about' component={About}></Route>
                  <Route exact path='/resetpwd' component={Resetpwd}></Route>
                </Switch>
                
              </section>
              <footer className="p-grid p-m-0">
                foote
              </footer>
        </div>
        </Router>
      );
   }
}


export default App;