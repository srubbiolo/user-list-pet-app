import React, { useState, useEffect } from 'react';
import TitleAndDescription from './Header/TitleAndDescription';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import retreiveUserData from '../../services/fetchUserDataService';
import UserList from './UserList/UserList';
import SelectedUserDisplay from './RightDisplay/SelectedUserDisplay';
import FilterUsers from './Header/FilterUsers';
import './UserListTemplate.css';

const UserListTemplate = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const filterUsers = (userSearch) => {
        let filteredUsers = allUsers;
        filteredUsers = filteredUsers.filter((userItem) => {
            let userOptions =  userItem.name.first.toLowerCase() + userItem.name.last.toLowerCase()
            return userOptions.indexOf(userSearch.toLowerCase()) !== -1
        })

        if (filteredUsers.length > 0) {
            setFilteredUsers(filteredUsers);
        } else {
            setFilteredUsers([]);
        }
    }

    const handleChange = (value) => {
        filterUsers(value);
    }

    const selectUser = (user) =>{
        setSelectedUser(user);
    }

    useEffect(() => {

        retreiveUserData().then(res => {
            setAllUsers(res.results);
            setFilteredUsers(res.results);
        })

    }, [])

    return <>
        <Row className="main-app-row">
            <Col class="col-8" className="header-and-user-list-col">
                <Row>
                    <TitleAndDescription
                        title="Users"
                        description="If you want to get contact information to specific user, just select group and then select him from the list below."
                    />
                </Row>
                <Row>
                    <FilterUsers handleChange={handleChange}/>
                </Row>
                <Row>
                    <UserList users={filteredUsers} selectUser={selectUser}/>
                </Row>
            </Col>

            <Col class="col-4" className="show-user-col">
                <SelectedUserDisplay user={selectedUser}/>
            </Col>
        </Row>
    </>
}

export default UserListTemplate