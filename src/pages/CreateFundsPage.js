import React from 'react';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Steps} from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class CreateFundsPages extends React.Component {  
  
   constructor(props) {
      super(props);
      this.state = {
          activeIndex: 0
      };

      this.items = [
          {
              label: 'Create',
              command: (event) => {
                  this.toast.show({ severity: 'info', summary: 'Create', detail: event.item.label });
              }
          },
          {
              label: 'Fees',
              command: (event) => {
                  this.toast.show({ severity: 'info', summary: 'Fees', detail: event.item.label });
              }
          },
          {
              label: 'Tokens',
              command: (event) => {
                  this.toast.show({ severity: 'info', summary: 'Tokens', detail: event.item.label });
              }
          },
          {
              label: 'Customize',
              command: (event) => {
                  this.toast.show({ severity: 'info', summary: 'Customize', detail: event.item.label });
              }
          },
          {
            label: 'Publish',
            command: (event) => {
                this.toast.show({ severity: 'info', summary: 'Publish', detail: event.item.label });
            }
        }
      ];
  }

  render() {
      return (
         
         <div className="cfund-main">
            <section>
               <div className="steps-demo">
                  <Toast ref={(el) => { this.toast = el }}></Toast>

                  <div className="card">
                  <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} />
                  </div>
               </div>
            </section>
            <h2 className="p-mt-5">Add Details</h2>
            <p>
               Basic details such as name and symbol are written to the blockchain and cannot be update later.
               Once created, you can customize your Set's description, the manager description, and provide image icons.
            </p>
            <h6>Create a name of your Set</h6>
            <p>
               Great Set manes are unique, short and easy to remember. They must be 32
               characters or less.
            </p>
            <p>
               <InputText className='p-col-12 cfptextbox' id='setname' value='' placeholder='e.g Ethereum Volatility Index' type='text' />
            </p>
            <h6>Create a symbol for your Set</h6>
            <p>
               Symbols are a 3 to 5 character name to represent your trading pool, e.g. ETH or BTC.
            </p>
            <p>
               <InputText className='p-col-12 cfptextbox' id='setsymbol' value='' placeholder='EVOLI' type='text' />
            </p>
            <h6>Select a starting price</h6>
            <p>
               This will be the starting price of your Set in USD once its been created.
            </p>
            <p>
               <InputText className='p-col-12 cfptextbox' id='setstrprice' value='' placeholder='100' type='text' />
            </p>
            <h6>Fund Type</h6>
            <p>
               This will let your investors know how the fund will be managed.
            </p>

            <div className='p-field p-col-12 p-md-12'>
              <Button label='Passive Fund' className='p-button p-component p-button-info p-col-4 p-mt-2'
              />
              <Button label='Active Fund' className='p-button p-component p-button-success p-col-3 p-mt-2 p-ml-1'/>
              <Button label='Quant Fund' className='p-button p-component p-button-warning p-col-4 p-mt-2 p-ml-1'/>
            </div>

            <div className='p-field p-col-12 p-md-12 p0 m0'>
              <Button
                label='Back'
                onClick={() => {
                  window.location = '/createfunds';
                }}
                className='p-button p-component p-button-outlined p-button-secondary p-col-5 p-mt-21'
              />
              <Button
                label='Continue'
                onClick={() => {
                  window.location = '/createfpfees';
                }}
                className='p-button p-component p-button-info p-col-5 p-mt-21 p-ml-5' id='btncont'
              />
            </div>
         </div>
      );
   }  
}  
export default CreateFundsPages; 