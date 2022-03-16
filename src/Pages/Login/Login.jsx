import React, {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "../../UIKit/Input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PopModal from "../../UIKit/PopModal/PopModal";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import BidukLogo from "../../Assets/img/bidukLogoBlack.png";

const theme = createTheme();

function Login() {

const [id, setID] = useState("")
const [phone, setPhone] = useState("")
const [idError, setIdError] = useState(false)
const [phoneError, setPhoneError] = useState(false)
const [OTP, setOTP] = useState("")

const [open, setOpen] = useState(false);
const onOpenModal = () => setOpen(true);



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  
  // if(id ===""){
  //   setIdError(true)
  // }
  // if(phone ===""){
  //   setPhoneError(true)
  // }

  const href = (e) =>{
    e.preventDefault();
    if(OTP === 1111){
      return (
        "/main"
      )
    }}

  //   if(id && phone){
  //     console.log(id, phone)
  //   }
  // }

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
                // onSubmit={handleSubmit}
                noValidate
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                  {/* <form noValidate autoComplete="off" > */}
                <Input
                  onChange={(e) => setID(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="ID"
                  label="תעודת זהות"
                  name="ID"
                  autoComplete="ID"
                  autoFocus
                  error={idError}
                />
                <Input
                onChange={(e) => setPhone(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="טלפון"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={phoneError}

                />
                
                <Grid item xs>
                  <Box sx={{mr: 1}}>
                    <Link href="/forgot" variant="body2">
                      שכחתי סיסמה
                    </Link>
                  </Box>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    direction: "column",
                    width: "100%",
                    marginTop: 3,
                    mr: -2,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="הישאר מחובר"
                  />
                </Box>
                <Button
                  href={href}
                  // type="submit"
                  onClick={onOpenModal}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  התחבר
                </Button>
                <PopModal stateChange={setOTP} variant="OTPModal" open={open} closeIt={(open) => setOpen(false)} />

                {/* </form> */}
              </Box>
              <Link padding="20px" href="/registration" variant="body2">
                {"לא רשום עדין? הרשם עכשיו"}
              </Link>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
