import React from 'react';

import { connect } from 'react-redux';
import { deleteUser } from '../actions/userActions';


const Settings = props => {

    const handleClick = id => {
        props.deleteUser(id)
        props.history.push('/login')
    }

    return (
        <div>
            <button onClick={() => handleClick(props.currentUserId)}>Delete Account</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.id
    }
}

export default connect(mapStateToProps, { deleteUser })(Settings);