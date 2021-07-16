import React from 'react'; 
class CreateFunds extends React.Component {  
  render() {
      return (
         <div className="cfund-main">
            <h2>Create Your Funds</h2>
            <p>
               <strong>Name Your Fund</strong> &ndash; Name your Set and select a starting point
            </p>
            <p>
               <strong>Set Fees</strong> &ndash; Set fees you want to charge to your fund holders
            </p>
            <p>
               <strong>Choose Your Tokens</strong> &ndash; Choose Tokens you want to include in your Funds and adjust their allocations. These can be change later
            </p>
            <p>
               <strong>Customize</strong> &ndash; Write name of the creator, choose image for the fund, and description of your fund
            </p>
            <p>
               <strong>Publish</strong> &ndash; Deploy your Fund to the Ethereum mainnet. Once published your Fund will be able to issue collateralized ERC20 tokens.
            </p>
         </div>
      );
   }  
}  
export default CreateFunds; 