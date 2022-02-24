import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "../../UIKit/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";

const theme = createTheme();

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
                כניסה
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
                <Input
                  margin="normal"
                  required
                  fullWidth
                  id="ID"
                  label="תעודת זהות"
                  name="ID"
                  autoComplete="ID"
                  autoFocus
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
                <Grid item xs>
                  <Link href="#" variant="body2">
                    שכחתי סיסמה
                  </Link>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    direction: "column",
                    width: "100%",
                    marginTop: 3,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="הישאר מחובר"
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  התחבר
                </Button>
              </Box>
              <Link padding="20px" href="#" variant="body2">
                {"לא רשום עדין? הרשם עכשיו"}
              </Link>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
