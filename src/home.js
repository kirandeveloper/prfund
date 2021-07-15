import React from 'react'; 
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
class Home extends React.Component {  
  constructor(props) {
      super(props);
		
      this.state = {
         chkreme: false
      }
      this.onremeChange = this.onremeChange.bind(this);
   };

   onremeChange(e)
   {
      this.setState({chkreme: e.checked});
   }

  render() {
      return (
         <section className="p-grid p-m-0">
            Home
         </section>
      );
   }  
}  
export default Home; 