import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormGroup from "@mui/material/FormGroup";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <ArrowBackIcon
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </ArrowBackIcon>
      </FormGroup>
    </Box>
  );
}
