import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({onChange}) {

    const handleEnter = (e) => {
        e.preventDefault();
        onChange(e.target.value)
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form>
      <TextField
       id="filled-basic" 
       label="Filled" 
       variant="outlined" 
       onChange={handleEnter}
       type= "string"
       />
       </form>
    </Box>
  );
}