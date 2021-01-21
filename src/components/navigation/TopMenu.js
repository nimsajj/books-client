import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { topMenuStyles as useStyles } from "./styles";
import LeftMenu from "./LeftMenu";

const TopMenu = () => {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const renderMenuIcon = () => (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );

  const renderMenuLinks = () => (
    <>
      <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.link}>
          Books
        </Link>
      </Typography>
      <Button color="inherit">
        <Link to="/login" className={classes.link}>
          Login
        </Link>
      </Button>
    </>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {renderMenuIcon()}
          {renderMenuLinks()}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <LeftMenu isOpen={isOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default TopMenu;
