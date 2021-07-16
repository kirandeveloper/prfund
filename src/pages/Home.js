import React from 'react'; 
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class Home extends React.Component {  
  constructor(props) {
      super(props);
		
      this.state = {
         chkreme: false,
         products1: null,
         products2: null,
         products3: null,
         products4: null
      }

      this.columns = [
         { field: 'code', header: 'Code' },
         { field: 'name', header: 'Name' },
         { field: 'quantity', header: 'Quantity' },
         { field: 'price', header: 'Price' }
     ];

      this.onremeChange = this.onremeChange.bind(this);
   };
   onremeChange(e)
   {
      this.setState({chkreme: e.checked});
   }

  render() {
      return (
         <div className="App">
            <section className="p-grid p-m-0">
               <div className="p-field p-col-6 p-md-6">
                  <h4>Top Funds</h4>
               </div>
               <div className="p-field p-col-6 p-md-6">
                  <h4>My Funds</h4>
               </div>
            </section>
            <section className="p-grid p-m-0">
               <div className="p-field p-col-3 p-md-3">
                  <h5 className="p-mt-0 p-mb-1">Big 3 Weighted</h5>
                  <h6 className="p-mt-0 p-mb-1">By Pridevel</h6>
                  <p className="p-mt-0 p-mb-1">
                     A pick of the top three most popular cryptocurrency in the smart contracts and payments industries, weighted by total market capitalization
                  </p>
                  <p className="p-mt-0 p-mb-1"><a href="#">More details</a></p>
                  <table class="table">
                    <tbody>
                        <tr>
                           <td><strong>All-time Performance</strong></td>
                           <td>296.83%</td>
                        </tr>
                        <tr>
                           <td><strong>NAV</strong></td>   
                           <td>$3434.34</td>                           
                        </tr>
                     </tbody>
                  </table>
                  <table class="table">
                    <tbody>
                        <tr>
                           <td><strong>Balance of coins</strong></td>
                        </tr>
                        <tr>
                           <td>
                              Market coverage : 59% <br/>
                              Min deposit:$1,00
                           </td>                           
                        </tr>
                     </tbody>
                  </table>
                  <div class="progress">
                     ENJ
                  </div>
                  <Button label="Invest" className="p-button-info p-col-12 p-mt-3" />
               </div>
               <div className="p-field p-col-3 p-md-3">
                  <h5 className="p-mt-0 p-mb-1">Big 3 Weighted</h5>
                  <h6 className="p-mt-0 p-mb-1">By Pridevel</h6>
                  <p className="p-mt-0 p-mb-1">
                     A pick of the top three most popular cryptocurrency in the smart contracts and payments industries, weighted by total market capitalization
                  </p>
                  <p className="p-mt-0 p-mb-1">
                     <a href="#">More details</a>
                     
                  </p>
                  <table class="table">
                    <tbody>
                        <tr>
                           <td><strong>All-time Performance</strong></td>
                           <td>296.83%</td>
                        </tr>
                        <tr>
                           <td><strong>NAV</strong></td>   
                           <td>$3434.34</td>                           
                        </tr>
                     </tbody>
                  </table>
                  <table class="table">
                    <tbody>
                        <tr>
                           <td><strong>Balance of coins</strong></td>
                        </tr>
                        <tr>
                           <td>
                              Market coverage : 59% <br/>
                              Min deposit:$1,00
                           </td>                           
                        </tr>
                     </tbody>
                  </table>
                  <div class="progress">
                     ENJ
                  </div>
                  <Button label="Invest" className="p-button-info p-col-12 p-mt-3" />
               </div>
               <div className="p-field p-col-6  p-md-6">
                  <table class="table">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Market Cap</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>BigFund</td>
                           <td>$123456789</td>
                           <td><strong>$376.94</strong></td>
                        </tr>
                        <tr>
                           <td>Pridevel GenIndex</td>
                           <td>$123456789</td>
                           <td><strong>$376.94</strong></td>
                        </tr>
                     </tbody>
                  </table> 
                  <div className="p-field p-col-6 p-md-6">
                     <h4>My Investmemt</h4>
                  </div>    
                  <div className="p-field p-col-12  p-md-12">
                  <table class="table">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Market Cap</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>BigFund</td>
                           <td>$123456789</td>
                           <td><strong>$376.94</strong></td>
                        </tr>
                        <tr>
                           <td>Pridevel GenIndex</td>
                           <td>$123456789</td>
                           <td><strong>$376.94</strong></td>
                        </tr>
                     </tbody>
                  </table>
                 </div>             
               </div>
            </section>
         </div>
      );
   }  
}  
export default Home; 