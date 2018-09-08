import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const formStyle = {
  margin: '40px 300px 40px 300px',
  textAlign: 'center'
}

const inputStyle = {
  marginRight: '20px',
}

const NewKegForm = () => {
  return (
    <div style={formStyle}>
      <FormControl style={inputStyle} margin='dense'>
        <InputLabel>Beer Name</InputLabel>
        <Input
          id='name'
        />
      </FormControl>
      <FormControl margin='dense'>
        <InputLabel>Brewery</InputLabel>
        <Input
          id='brewery'
        />
      </FormControl>
      <FormControl margin='dense'>
        <InputLabel>Description</InputLabel>
        <Input
          id='description'
        />
      </FormControl>
      <FormControl style={inputStyle} margin='dense'>
        <InputLabel>ABV</InputLabel>
        <Input
          id="adornment-amount"
          type="number"
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
        />
      </FormControl>
      <FormControl margin='dense'>
        <InputLabel>Price</InputLabel>
        <Input
          id="adornment-amount"
          type="number"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}

export default NewKegForm;
