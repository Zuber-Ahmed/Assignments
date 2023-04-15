import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, IconButton, Typography } from "@mui/material";
import { Component1 } from "../Component1";

export const Navbar = () => {
  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "white", color: "MenuText" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            $Bitcoin Currency
          </Typography>
          <Button variant="outlined" sx={{marginRight:'10px'}}>Login</Button>
          <Button variant="contained" color='error'>Start Trial</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Component1/>
    </>
  );
};
