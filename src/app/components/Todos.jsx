import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

    return (
        <TodoContainer>
            <h3>Title: {user.title}</h3>
            <p>Completed: {user.completed.toString()}</p>
        </TodoContainer>
    );
};

export default Todo;

const TodoContainer = styled.div`
    border: 1px solid #ccc;
    padding: 1rem;
    margin-top: 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    border-radius: 1rem;
`
