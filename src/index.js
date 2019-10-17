import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserListTemplate from './components/UserListApp/UserListTemplate';
import {ToastContainer} from "react-toastify";
import Container from 'react-bootstrap/Container';

ReactDOM.render(
    <Container>
        <ToastContainer />
        <UserListTemplate/>
    </Container>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
