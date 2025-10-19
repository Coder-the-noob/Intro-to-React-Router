import React, { use } from 'react';

const Users2 = ({usersPromise}) => {

    const users = use(usersPromise);
    console.log("Data loaded for Users2:", users);
    return (
        <div>
            <h2>This is the Users2 page</h2>
        </div>
    );
};

export default Users2;