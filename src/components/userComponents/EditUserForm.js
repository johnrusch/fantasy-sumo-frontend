import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class EditUserForm extends Component {

    state = {
        user: {
            id: this.props.currentUser.id,
            name: this.props.currentUser.name
        },
        showModal: false
    }

    rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    getModalStyle = () => {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    useStyles = makeStyles((theme) => ({
        modal: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        paper: {
          position: "absolute",
          width: 450,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));

    // SimpleModal = props => {
        
      
        handleOpen = () => {
          this.setOpen(true);
        };
      
        handleClose = () => {
          this.setOpen(false);
        };

    handleChange = (e) => {
        this.setState({
            user: {
                id: this.props.currentUser.id,
                name: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateUser(this.state.user)
        this.props.history.push('/')
    }

    render() {

        const classes = this.useStyles();
        const [modalStyle] = React.useState(this.getModalStyle);
        const [open, setOpen] = React.useState(false);

        return (
            // <div className="card">
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="text" value={this.state.user.name} onChange={this.handleChange} />
            //         <input type="submit" className="btn btn-warning" value="Update Account"/>
            //     </form>
            // </div>
            <div>
            <Button variant="contained" color="primary" onClick={this.handleOpen}>
              Delete Account
            </Button>
      
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={this.handleClose}
            >
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.user.name} onChange={this.handleChange} />
                <input type="submit" className="btn btn-warning" value="Update Account"/>
            </form>
              <div style={modalStyle} className={classes.paper}>
                <h2>Delete Account</h2>
                <p>
                  Are you sure you want to delete your account?
                </p>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                  Yes
                </Button>
              </div>
            </Modal>
          </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        currentUser: state.auth
    }
}

export default connect(mapStateToProps, { updateUser })(EditUserForm);


