import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

// import { connect } from "react-redux";
// import { logOut } from "../actions/authActions";

const NavBar = (props) => {
  const currentUser = props.currentUser;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
    },
  }));

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorOptions, setAnchorOptions] = React.useState(null);
  const open = Boolean(anchorEl);
  const openOptions = Boolean(anchorOptions);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionsMenu = (event) => {
    setAnchorOptions(event.currentTarget);
  };

  const handleOptions = (event) => {
    setAnchorOptions(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseOptions = () => {
    setAnchorOptions(null);
  };

  const handleLogout = () => {
    // props.logOut();
    localStorage.removeItem("token")
    props.history.push("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button href="/" className="domain">
            Fantasy Sumo
          </Button>
        </Typography>

        <Button color="inherit" className="link" href="/leagues">
          Leagues
        </Button>
        <Button color="inherit" className="link" href="/teams">
          Teams
        </Button>
        <Button color="inherit" className="link" href="/rules">
          Rules
        </Button>
        {currentUser && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>
                <Button href="/settings" onClick={handleClose}>
                  My Account
                </Button>
              </MenuItem>
              <MenuItem>
                <Button href="/login" onClick={handleLogout}>
                  Log Out
                </Button>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
   
  );
  
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.name,
  };
};

export default NavBar;
