import React from 'react'
import styled from 'styled-components'

const NotificationText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const NotificationPage: React.FunctionComponent = () => {
    return (
        <NotificationText>Notification</NotificationText>
    )
}

export default NotificationPage