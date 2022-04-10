import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "../../UIKit/Input/Input";
import Select from "../../UIKit/Select/Select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Reg.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";
import Datepicker from "../../UIKit/Datepicker/Datepicker";
import axios from 'axios'

const theme = createTheme();

function Login({ handleClick }) {
  const [IDvalue, setIDvalue] = useState("");
  const [Phonevalue, setPhonevalue] = useState("");
  const [HMOvalue, setHMOvalue] = useState("");
  const [Datevalue, setDatevalue] = useState("");


  const post = () => {
    axios.put('http://localhost:4000/register', {
      IsraeliID: "034526780",
      phone: "+972526945286",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img className="Logo_Login" src={BidukLogo} alt="" />
              <Typography component="h1" variant="h5">
                הרשמה
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  onChange={(e) => setIDvalue(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="ID"
                  label="תעודת זהות"
                  name="ID"
                  autoComplete="ID"
                />
                <Input
                  onChange={(e) => setPhonevalue(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="טלפון"
                  type="phone"
                  id="phone"
                />
                <Datepicker getDate={(date) => setDatevalue(date)} />
                <Select label="קופת חולים" variant={"HMO"} onChange={(e) => setHMOvalue(e.target.value)} />
                <Button
                  type="submit"
                  onClick={post}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 6, mb: 2 }}
                >
                  הרשם
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
