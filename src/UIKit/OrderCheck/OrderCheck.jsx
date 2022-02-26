import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Select from "../../UIKit/Select/Select";
import ButtonConfirm from "../../UIKit/ButtonConfirm/ButtonConfirm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./OrderCheck.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";

const theme = createTheme();

function Login() {
  const [city, setCity] = useState("Rishon");
  const [station, setStation] = useState("Sea-side");
  const [HMOvalue, setHMOvalue] = useState("");
  const [Datevalue, setDatevalue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city, station);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: -12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "400",
              }}
            >
              {/* <img className="Logo_Login" src={BidukLogo} alt="" /> */}
              <Typography component="h1" variant="h5">
                דף הזמנת בדיקה חדשה
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Select
                  onChange={(e) => setCity(e.target.value)}
                  label="עיר מגורים"
                  variant="city"
                />
                <Select
                  onChange={(e) => setStation(e.target.value)}
                  label="תחנת בדיקה"
                  variant="city"
                />
                <Select
                  onChange={(e) => setStation(e.target.value)}
                  label="תאריך"
                  variant="city"
                />
                <Select
                  onChange={(e) => setStation(e.target.value)}
                  label="שעה"
                  variant="city"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 6, mb: 2 }}
                >
                  הזמן בדיקה
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
