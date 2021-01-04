import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Leagues from '../components/leagueComponents/Leagues'

import { observer } from "mobx-react";
import { useStore } from "../store";

// import { connect } from "react-redux";
// import { logOut } from "../actions/authActions";

const NavBar = observer((props) => {
  // const currentUser = props.currentUser;
  const store = useStore();

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
    header: {
      backgroundColor: "#c38c49",
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    store.logOut();
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button>
          <Link to="/" style={{color: "white"}} className="domain">Fantasy Sumo</Link>
          </Button>
        </Typography>
        <Button>
        <Link to="/leagues" className="link">
          Leagues
        </Link>
        </Button>
        <Button>
        <Link to="/teams" className="link">
          Teams
        </Link>
        </Button>
        {store.loggedIn && (
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
              <MenuItem className={classes.header}>
                  <Link to="/settings" onClick={handleClose}>My Account</Link>
              </MenuItem>
              <MenuItem className={classes.header}>
                  <Link
                    to={{
                      pathname: "/login",
                      state: { from: "/" },
                    }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Link>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
