import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const {name , website} = user;
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;