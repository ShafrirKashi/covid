import React, {useState} from "react";
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

export default function BasicSelect({onChange}) {

  const [HMO, setHMO] = React.useState("");

  return (
    <CacheProvider value={cacheRtl}>
      <Box sx={{ minWidth: 274, paddingLeft: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">קופת חולים</InputLabel>
          <Select
          
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={HMO}
            label="קופת חולים"
            onChange={onChange}
            variant="outlined"
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
}
