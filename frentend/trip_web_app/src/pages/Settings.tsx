import React from 'react'
import styled from 'styled-components'

const SettingText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const SettingsPage: React.FunctionComponent = () => {
    return (
        <SettingText>Settings</SettingText>
    )
}

export default SettingsPage