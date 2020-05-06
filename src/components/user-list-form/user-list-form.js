import React, {Component} from 'react';
import PropTypes from 'prop-types';

const UserListFrom = ({userFormSearchValue, setUserFormSearchValue, onInputChanged, onFormSubmitted, onFormRestored}) => {
    return (
        <div>
        <div >Current userFormSearchValue o_0: ---> <strong>{userFormSearchValue}</strong></div>
        <input type="text" onChange={(e) => {setUserFormSearchValue(e.target.value); onInputChanged(e);}} value={userFormSearchValue} />
        <input type="button" value="search" onClick={onFormSubmitted} />
        <input type="button" value="reset" onClick={onFormRestored} />
        </div>
    );
}

UserListFrom.propTypes = {
    userFormSearchValue: PropTypes.string,
    onInputChanged: PropTypes.func,
    onFormSubmitted: PropTypes.func,
    onFormRestored: PropTypes.func
};

export default UserListFrom;
