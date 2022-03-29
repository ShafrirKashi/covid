import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import './Search.css'

const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  
export default function BasicTextFields({onChange, focus}) {



    const handleEnter = (e) => {
        e.preventDefault();
        onChange(e.target.value)
    }

    return (
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div dir="rtl">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { ml:0,mt: 0, width: 1 },
                }}
                noValidate
                autoComplete="off"
              >
          <TextField
           id="filled-basic" 
           label="חיפוש..." 
           variant="outlined" 
           onChange={handleEnter}
           type= "string"
           autoFocus={true}
           />
              </Box>
            </div>
          </ThemeProvider>
        </CacheProvider>
      );
}
