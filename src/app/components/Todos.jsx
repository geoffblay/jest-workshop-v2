import React, { useState, useEffect } from 'react';

const Todo = ({ userId }) => {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`);
    //         const data = await response.json();
    //         setUser(data);
    //     };
    //     fetchUser();
    // }, [userId]);

    // if (!user) {
    //     return <div>Loading...</div>;
    // }

    // return (
    //     <div>
    //         <h3>Title: {user.title}</h3>
    //         <p>Completed: {user.completed.toString()}</p>
    //     </div>
    // );
};

export default Todo;
