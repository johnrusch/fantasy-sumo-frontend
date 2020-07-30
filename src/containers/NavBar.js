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

import { connect } from "react-redux";
import { logOut } from "../actions/authActions";

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
    props.logOut();
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
    //   <div>
    //   <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
    //     <Link className="navbar-brand" to="/">
    //       Fantasy Sumo
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {currentUser ? (<div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">

    //         </li>
    //         <li className="nav-item">

    //         </li>
    //         {/* <li className="nav-item">
    //           <Link className="nav-link" to="/banzuke">
    //             Banzuke
    //           </Link>
    //         </li> */}
    //         <li className="nav-item dropdown">

    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/settings">
    //             User Settings
    //           </Link>
    //         </li>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <Link className="dropdown-item" to="/dashboard/mailbox/inbox">
    //               Inbox
    //             </Link>
    //             <Link className="dropdown-item" to="/dashboard/mailbox/outbox">
    //               Sent Messages
    //             </Link>
    //             <div className="dropdown-divider"></div>
    //             <Link className="dropdown-item" to="/dashboard/mailbox/message-form">
    //               New Message
    //             </Link>
    //           </div>
    //       </ul>
    //       <ul className="navbar-nav ml-auto">
    //         {/* {loggedIn ? (
    //           <a className="item">Welcome {currentUser.username}</a>
    //         ) : null} */}
    //         {currentUser ? (
    //           <li className="nav-item">
    //             <Link to="/login" className="nav-link">
    //               <div onClick={() => {
    //                 this.props.logOut();
    //               }}
    //               className="ui primary button"
    //               >
    //               Log Out
    //               </div>
    //             </Link>
    //           </li>
    //         ) : (
    //           <li className="nav-item">
    //             <Link to="/login" className="nav-item">
    //               <div className="nav-link">Sign In</div>
    //             </Link>
    //           </li>
    //         )}
    //         {/* <li class="nav-item">
    //           <Link class="nav-link" to="/login">
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link class="nav-link btn btn-primary" to="/signup">
    //             Start Here
    //           </Link>
    //         </li> */}
    //       </ul>
    //     </div>) : null }
    //   </nav>
    // </div>
  );
  // }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.name,
  };
};

export default connect(mapStateToProps, { logOut })(NavBar);
