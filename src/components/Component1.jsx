import { Fab, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import React, { useEffect, useState } from "react";
import pic from "../Assets/undraw_digital_currency_qpak.svg";
import Component2 from "./Component2";
import './Component1.css';

export const Component1 = () => {
  const [userData, setUserData] = useState({
    email: "",
    fname: "",
    lname: "",
    mobile: "",
    password: "",
  });
  const [enableBtn, setEnableBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setUserData({
      email: e.target.value,
      fname: "",
      lname: "",
      mobile: "",
      password: "",
    });
  };
  const handleClick =()=>{
    setOpen(!open)
  }
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  useEffect(() => {
    if (!isEmail(userData.email)) {
      setEnableBtn(true);
    }else{
        setEnableBtn(false)
    }
  }, [userData]);

  return (
    <Box>
      <Box component={"div"} className='container'>
        <Box component="div">
          <img src={pic} alt="currency-bit" className="img-bg"/>
        </Box>
        <Box
          component="div"
          className="info-container"
        >
          <Typography
            component="h3"
            style={{ textAlign: "center", fontFamily: "inherit" }}
          >
            Bitcoin uses peer-to-peer technology to operate with no central
            authority or banks; managing transactions and the issuing of
            bitcoins is carried out collectively by the network. Bitcoin is
            open-source; its design is public, nobody owns or controls Bitcoin
            and everyone can take part. Through many of its unique properties,
            Bitcoin allows exciting uses that could not be covered by any
            previous payment system.
          </Typography>
          <Box
            component="div"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1em",
            }}
          >
            <TextField
              type="email"
              variant="outlined"
              color="success"
              label="Email"
              onChange={handleChange}
            />
            <Fab color="error" variant="extended" disabled={enableBtn} onClick={handleClick}>
              <CurrencyBitcoinIcon sx={{ mr: 1 }} />
              start now
            </Fab>
          </Box>
        </Box>
      </Box>
      {open && <Component2 open={open} setOpen={setOpen} data={userData}/>}
    </Box>
  );
};
