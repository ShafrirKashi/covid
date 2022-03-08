import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cityList from '../../APIcalls/city.json';


export default function ComboBox({stateChanger}) {

    const [city, setCity] = useState("");


    const handleNext = (e, newInputValue) => {
        e.preventDefault();
        setCity(newInputValue);
      };
    
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cityList}
      sx={{ width: 300 }}
      value={city}
      onInputChange={handleNext}
      renderInput={(params) => <TextField {...params} label="עיר" />}
    />
  );
}

