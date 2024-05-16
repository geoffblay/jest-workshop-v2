import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Todo = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`);
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <TodoContainer>
            <h3>Title: {user.title}</h3>
            <h4>Completed: {user.completed.toString()}</h4>
            <ToggleCompletedButton onClick={() => setUser({ ...user, completed: !user.completed })}>Toggle Complete</ToggleCompletedButton>
        </TodoContainer>
    );
};

export default Todo;

const TodoContainer = styled.div`
    border: 1px solid #ccc;
    padding: 1rem;
    padding-bottom: 2rem;
    margin-top: 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    border-radius: 1rem;
`

const ToggleCompletedButton = styled.button`
    background-color: #0f1056;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1rem;
`
