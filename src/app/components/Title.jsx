import React from 'react'
import styled from 'styled-components'

const Title = ({ name }) => {
  return (
    <TitleText>Hello there, {name}</TitleText>
  )
}

export default Title

const TitleText = styled.h1`
    color: white;
    font-size: 2rem;
`


