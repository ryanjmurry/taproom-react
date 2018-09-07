import React from 'react';
import TextField from '@material-ui/core/TextField';

const NewKegForm = () => {

  const style={
    color: 'red'
  }
  return (
    <div>
      <form>
        <TextField style={style} 
          id="name"
          label="name"
          margin="normal"
        />
        <TextField style={style} 
          id="brewer"
          label="brewer"
          margin="normal"
        />
        <TextField style={style} 
          id="description"
          label="description"
          margin="normal"
        />
        <TextField style={style} 
          id="abv"
          label="abv"
          margin="normal"
        />
        <TextField style={style} 
          id="price"
          label="price"
          margin="normal"
        />
        <TextField style={style} 
          id="remaining"
          label="remaining"
          margin="normal"
        />
      </form>
    </div>
  );
}

export default NewKegForm;
