"use client";

import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const CountButton = () => {
    const [count, setCount] = useState(0)

    return (
        <CountButtonContainer>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </CountButtonContainer>
    )
}

export default CountButton

const CountButtonContainer = styled.div`
    margin-top: 20px;
    button {
        padding: 10px 20px;
        font-size: 20px;
    }
`