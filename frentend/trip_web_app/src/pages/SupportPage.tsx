import React from 'react'
import styled from 'styled-components'

const SupportText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const SupportPage: React.FunctionComponent = () => {
    return (
        <SupportText>Support</SupportText>
    )
}

export default SupportPage