import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    return (
        <div>
            <h4>User Details</h4>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
        </div>
    );
};

export default UserDetails2;
