import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "../../UIKit/Input/Input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ForgotPass.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";

const theme = createTheme();

function Login() {


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
                שחזור סיסמה
              </Typography>
              <Box
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Input
                  margin="normal"
                  required
                  fullWidth
                  id="ID"
                  label="תעודת זהות"
                  name="ID"
                  autoComplete="ID"
                />
                <Input
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="טלפון"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              
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
                
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  שחזר סיסמה
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
