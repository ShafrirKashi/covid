import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function BasicSelect({onChange, variant, label}) {

  const [hmo, setHMO] = React.useState("");
  const [city, setCity] = React.useState("");
  

  const handleChangeHMO = (event) => {
    setHMO(event.target.value)}

  const handleChangeCity = (event) => {
    setCity(event.target.value)}

  if (variant === "HMO"){
    return (
      <CacheProvider value={cacheRtl}>
        <Box sx={{mt:1.5, minWidth: 274, paddingLeft: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              value={hmo}
              label="קופת חולים"
              onChange={handleChangeHMO}
              variant="standard"
            >
              <MenuItem value={"leumit"}>לאומית</MenuItem>
              <MenuItem value={"clalit"}>כללית</MenuItem>
              <MenuItem value={"meuhedet"}>מאוחדת</MenuItem>
              <MenuItem value={"maccabi"}>מכבי</MenuItem>
              <MenuItem value={"idf"}>צה"ל</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CacheProvider>
    );
  }else if(variant === "city"){
    return (
      <CacheProvider value={cacheRtl}>
      <Box sx={{mt:1.5, minWidth: 274, paddingLeft: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="קופת חולים"
            onChange={handleChangeCity}
            variant="outlined"
          >
            <MenuItem value={"RishonLezion"}>ראשון לציון</MenuItem>
            <MenuItem value={"Haifa"}>חיפה</MenuItem>
            <MenuItem value={"TLV"}>תל אביב</MenuItem>
            <MenuItem value={"Jerusalem"}>ירושלים</MenuItem>
            <MenuItem value={"ashdod"}>אשדוד</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </CacheProvider>
    );
  }else{return ""}
 
}
