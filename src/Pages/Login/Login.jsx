import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "../../UIKit/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from 'axios'
import Box from "@mui/material/Box";
import PopModal from "../../UIKit/PopModal/PopModal";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";

const theme = createTheme();

function Login() {
  const [id, setID] = useState("");
  const [phone, setPhone] = useState("");
  // const [idError, setIdError] = useState(false)
  // const [phoneError, setPhoneError] = useState(false)
  const [OTP, setOTP] = useState("");
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);

  
  const post = () => {
    axios.post('http://localhost:4000/register', {
      IsraeliID: id,
      phone: phone,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  const href = (e) => {
    e.preventDefault();
    if (OTP === 1111) {
      return "/main";
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "400",
              }}
            >
              <img className="Logo_Login" src={BidukLogo} alt="" />
              <Typography component="h1" variant="h5">
                ??????????
              </Typography>

              <Box
                component="form"
                noValidate
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <form noValidate autoComplete="off">
                  <Input
                    onChange={(e) => setID(e.target.value)}
                    margin="normal"
                    required
                    fullWidth
                    id="ID"
                    label="?????????? ????????"
                    name="ID"
                    autoComplete="ID"
                  />
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    margin="normal"
                    required
                    fullWidth
                    name="text"
                    label="??????????"
                    type="text"
                    id="text"
                    autoComplete="current-password"
                  />

                  <Grid item xs>
                    <Box sx={{ mr: 1 }}>
                      <Link href="/forgot" variant="body2">
                        ?????????? ??????????
                      </Link>
                    </Box>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      direction: "column",
                      width: "100%",
                      marginTop: 3,
                      mr: -2,
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="?????????? ??????????"
                    />
                  </Box>
                  <Button
                    href={href}
                    // type="submit"
                    onClick={post}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    ??????????
                  </Button>
                  <PopModal
                    stateChange={setOTP}
                    variant="OTPModal"
                    open={open}
                    closeIt={(open) => setOpen(false)}
                  />
                </form>
              </Box>
              <Link padding="20px" href="/registration" variant="body2">
                {"???? ???????? ????????? ???????? ??????????"}
              </Link>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
