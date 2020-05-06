import React, {Component} from 'react';
import PropTypes from 'prop-types';

const User  = ({name, username, email}) => {
    return (
        <div>
            <span>Name: {name} </span> 
            <span>userName: {username} </span>
            <span>Email: {email} </span> 

        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default User;
