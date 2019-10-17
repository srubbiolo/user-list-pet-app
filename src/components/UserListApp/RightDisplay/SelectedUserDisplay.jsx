import React from 'react';
import Card from 'react-bootstrap/Card';
import './SelectedUserDisplay.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const SelectedUserDisplay = ({user}) => {
    return (!!user) ? (
        <Card className="user-info-big">
            <Card.Img className="background-profile-image" variant="top" src={user.picture.large}>
            </Card.Img>
                <img alt={`${user.name.first} ${user.name.last}`} className="profile-image-circle" src={user.picture.medium}/>
                <div className="profile-name-and-profesion">
                    <h4>{`${user.name.first} ${user.name.last}`}</h4>
                </div>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Card.Text>Email</Card.Text>
                        <Card.Title>{user.email}</Card.Title>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Card.Text>Country</Card.Text>
                        <Card.Title>{user.location.country}</Card.Title>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Card.Text>Phone</Card.Text>
                        <Card.Title>{user.phone}</Card.Title>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Card.Text>Age</Card.Text>
                        <Card.Title>{user.dob.age}</Card.Title>
                    </ListGroupItem>
                </ListGroup>
        </Card>
    ) : 'No user Selected';

}

export default SelectedUserDisplay