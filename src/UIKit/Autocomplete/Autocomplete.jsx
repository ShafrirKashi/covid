import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cityList from "../../APIcalls/city.json";

export default function ComboBox({ variant }) {
  const [city, setCity] = useState("");

  const handleNext = (e, newInputValue) => {
    e.preventDefault();
    setCity(newInputValue);
  };
  if (variant === "city") {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cityList}
        sx={{ width: 300 }}
        value={city}
        onInputChange={handleNext}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="עיר" />
        )}
      />
    );
  } else if (variant === "station") {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cityList}
        sx={{ width: 300 }}
        value={city}
        onInputChange={handleNext}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="תחנת בדיקה" />
        )}
      />
    );
  } else if (variant === "testType") {
    return (
      <Autocomplete
        disablePortal
        variant="standard"
        id="combo-box-demo"
        options={[
          {
            label: "PCR ",
          },
          {
            label: "אנטיגן מוסדי ",
          },
          {
            label: "אנטיגן ביתי",
          },
        ]}
        sx={{ width: 300 }}
        value={city}
        onInputChange={handleNext}
        renderInput={(params) => (
          <TextField variant="standard" {...params} label="סוג בדיקה" />
        )}
      />
    );
  }
}
