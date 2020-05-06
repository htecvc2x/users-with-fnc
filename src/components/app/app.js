import React, {Component, useState, useEffect, useCallback} from 'react';

import UserList from '../user-list';
import UserListForm from '../user-list-form';

const App = () => {

    const [userFormSearchValue, setUserFormSearchValue] = useState('');
    const [users, setUsers] = useState([]);
    const [baseState, setBaseState] = useState({});

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(function updateItem(e){
        console.log('useEffect.updateItem');
        setUserFormSearchValue(v);
    });

    const loadUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setBaseState({users: json});
                setUsers(json);
            })
    }

    const onInputChanged = (e) => {
        const v = e.target.value;
        console.log(v);
        setUserFormSearchValue(v);
        setTimeout(() => {
            console.log(userFormSearchValue);
            onFormSubmitted();
        },1000)
    }

    const onFormSubmitted = () => {
        let v =  userFormSearchValue;
        console.log(v);
        if (userFormSearchValue) {
            v = v.toLowerCase();
            const users = baseState.users
            const a = users.filter((user) => {
                return user.name.toLowerCase().indexOf(v) + 1;
            }); 
            setUsers(a);
        }
    }

    const onFormRestored = () => {
        setUserFormSearchValue('');
        setUsers(baseState.users);
        onFormSubmitted();
    }

    return (
        <div className="app">
            <UserListForm
                setUserFormSearchValue={setUserFormSearchValue}
                onInputChanged={onInputChanged}
                onFormSubmitted={onFormSubmitted}
                onFormRestored={onFormRestored}
                userFormSearchValue={userFormSearchValue} 
                />
            <UserList
                users={users} 
            />
        </div>
    );
}

export default App;
