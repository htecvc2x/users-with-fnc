import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from '../user';

const UserList = ({users}) => {

    const elements = users.map((user) => {
        const {id, ...rest} = user;
        return (
            <li key={id}>
                <User
                    {...rest} />
            </li>
        );
    });

    return (
        <ul className="">
        {elements}
        </ul>
    );
}

UserList.propTypes = {
    users: PropTypes.array,
};

export default UserList;
