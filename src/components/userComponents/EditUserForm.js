import React, { useState } from 'react';
// import FlashMessage from 'react-flash-message'

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../actions/userActions';

const EditUserForm = props => {

    // state = {
    //     user: {
    //         id: this.props.currentUser.id,
    //         name: this.props.currentUser.name
    //     },
    //     showModal: false
    // }
    const currentUser = useSelector(s => s.auth)

    const dispatch = useDispatch()

    const [id, setId] = useState(currentUser.id)
    const [name, setName] = useState(currentUser.name)
    const [showModal, setShowModal] = useState(false)

    const user = {
      id,
      name
    }


    const rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    const getModalStyle = () => {
        const top = 50 + rand();
        const left = 50 + rand();
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
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
        
      
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(currentUser.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setId(currentUser.id)
        console.log(currentUser.id)
        dispatch(updateUser({id: currentUser.id, name}))
        props.history.push('/')
    }


        const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);

        return (
            // <div className="card">
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="text" value={this.state.user.name} onChange={this.handleChange} />
            //         <input type="submit" className="btn btn-warning" value="Update Account"/>
            //     </form>
            // </div>
            <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Update Account
            </Button>
      
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
            <form style={modalStyle} className={classes.paper} onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />
                <input type="submit" className="btn btn-warning" value="Update Account"/>
                {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Update
                </Button> */}
            </form>
              {/* <div style={modalStyle} className={classes.paper}>
                <h2>Delete Account</h2>
                <p>
                  Are you sure you want to delete your account?
                </p> */}
              {/* </div> */}
            </Modal>
          </div>
        )
    


}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.auth
//     }
// }

export default EditUserForm;


