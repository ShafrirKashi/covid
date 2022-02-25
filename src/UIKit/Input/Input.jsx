import React, {useState} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import './Input.css'

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});


export default function Direction({
  InputLabelProps,
  label,
  margin,
  type,
  id,
  autoComplete,
  onChange
}) {

  const [value, setValue] = useState('')
   console.log(value)
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { ml:1,mt: 3, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={onChange}
              margin={margin}
              required
              fullWidth
              type={type}
              id={id}
              autoComplete={autoComplete}
              label={label}
              variant="standard"
            />
          </Box>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
