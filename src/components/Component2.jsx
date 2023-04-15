import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import subs from '../Assets/subscribe.png'
import {
  Button,
  FormControl,
  InputAdornment,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import './Component2.css'

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 'auto',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Component2({ open, setOpen, data }) {
  const [signup, setSignUp] = React.useState({
    fname: "",
    lname: "",
    email: data.email,
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUp((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const handleSubmit = async() => {
    await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
    }).then((res) => res.json()).then((err)=>console.log(err))
    setOpen(false) 
  };

  return (
    <Box>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ "& > :not(style)": { m: 1 } }} className='form-container'>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-textfield"
                label="First Name"
                name="fname"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="Last Name"
                name="lname"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                value={data.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                type="password"
                label="Password"
                onChange={handleChange}
                name="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Button
                variant="contained"
                color="error"
                onClick={handleSubmit}
                style={{ width: "30px", marginTop: "10px", float: "right" }}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
          <Box component="div" className="msg-container">
            <Typography color="inherit" component="h4">
              EASY Steps This is dummy text only{" "}
            </Typography>
            <img src={subs} className='img-subs' alt="the subscribe "/>
            <Stepper alternativeLabel variant="progress">
              <Step>
                <StepLabel>Sign up</StepLabel>
              </Step>
              <Step>
                <StepLabel>Verify</StepLabel>
              </Step>
              <Step>
                <StepLabel>Download</StepLabel>
              </Step>
            </Stepper>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
