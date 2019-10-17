// import React from 'react';
import axios from 'axios';

const retreiveUserData = () => {
    const URL = 'https://randomuser.me/api/?results=50';

    return axios(URL, {
        method: 'GET',
    })
    .then( response => response.data)
    .catch(error => {
        throw error;
    })
}

export default retreiveUserData