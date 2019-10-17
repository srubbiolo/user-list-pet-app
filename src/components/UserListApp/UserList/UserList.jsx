import React, {useState} from 'react';
import './UserList.css';
import Card from 'react-bootstrap/Card';

const UserList = ({users, selectUser}) => {

    const [selected, setSelected] = useState();

    return users.map((user, index) => {
        return <Card body
                    key={index}
                    className={(selected === user.login.uuid) ? "user-card selected" : "user-card"}
                    onClick={() => {selectUser(user); setSelected(user.login.uuid)}}
                >
                    <img alt={`${user.name.first} ${user.name.last}`} src={user.picture.thumbnail}></img>
                    {`${user.name.first} ${user.name.last}`}
                </Card>
    })
}

export default UserList