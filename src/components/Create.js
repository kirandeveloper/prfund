import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const Create = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className='p-mt-5'>Add Details</h2>
      <p>
        Basic details such as name and symbol are written to the blockchain and
        cannot be update later. Once created, you can customize your Set's
        description, the manager description, and provide image icons.
      </p>
      <h6>Create a name of your Set</h6>
      <p>
        Great Set manes are unique, short and easy to remember. They must be 32
        characters or less.
      </p>
      <p>
        <InputText
          className='p-col-12 cfptextbox'
          id='setname'
          value={props.state.createName}
          onChange={(e) => props.onChange({ createName: e.target.value })}
          placeholder='e.g Ethereum Volatility Index'
          type='text'
        />
      </p>
      <h6>Create a symbol for your Set</h6>
      <p>
        Symbols are a 3 to 5 character name to represent your trading pool, e.g.
        ETH or BTC.
      </p>
      <p>
        <InputText
          className='p-col-12 cfptextbox'
          id='setsymbol'
          value={props.state.createSymbol}
          onChange={(e) => props.onChange({ createSymbol: e.target.value.toUpperCase() })}
          placeholder='EVOLI'
          type='text'
        />
      </p>
      <h6>Select a starting price</h6>
      <p>
        This will be the starting price of your Set in USD once its been
        created.
      </p>
      <p>
        <InputNumber
          className='p-col-12 cfptextbox'
          id='setstrprice'
          mode='currency'
          currency='USD'
          locale='en-US'
          value={props.state.createStartingPrice}
          onValueChange={(e) =>
            props.onChange({ createStartingPrice: e.target.value })
          }
          placeholder='100'
          type='text'
        />
      </p>
      <h6>Fund Type</h6>
      <p>This will let your investors know how the fund will be managed.</p>

      <div className='p-field p-col-12 p-md-12'>
        <Button
          label='Passive Fund'
          className='p-button p-component p-button-info p-col-4 p-mt-2'
        />
        <Button
          label='Active Fund'
          className='p-button p-component p-button-success p-col-3 p-mt-2 p-ml-1'
        />
        <Button
          label='Quant Fund'
          className='p-button p-component p-button-warning p-col-4 p-mt-2 p-ml-1'
        />
      </div>
    </div>
  );
};

export default Create;