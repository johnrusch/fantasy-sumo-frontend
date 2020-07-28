import React from 'react';
import { Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import EditUserForm from './EditUserForm';
import DeleteUserModal from './DeleteUserModal';

import { connect } from 'react-redux';
import { deleteUser } from '../actions/userActions';


const Settings = props => {

    const handleClick = id => {
        props.deleteUser(id)
        props.history.push('/login')
    }

    return (
        <div>
            <EditUserForm {...props}/>
            {/* <Button className="btn btn-danger" onClick={() => handleClick(props.currentUserId)}>Delete Account</Button> */}
            <DeleteUserModal {...props}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.id
    }
}

export default connect(mapStateToProps, { deleteUser })(Settings);