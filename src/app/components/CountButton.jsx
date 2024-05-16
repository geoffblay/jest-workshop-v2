"use client";

import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const CountButton = () => {
    const [count, setCount] = useState(0)

    return (
        <CountButtonContainer>
            <Button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </Button>
        </CountButtonContainer>
    )
}

export default CountButton

const CountButtonContainer = styled.div`
`

const Button = styled.button`
    background-color: #0f1056;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1rem;
`