import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchComponent } from '../../components/SearchComponent/SearchComponent'
import './style.css';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { UserProfileIcon } from '../../icons/UserProfileIcon';
import { Modal } from '@mui/material';
import { GlobalPopup } from '../../components/Popup/GlobalPopup';
import { NewPassensengerComponent } from '../../components/passengers/NewPassenger/NewPassengerComponent';


export const PassengersPage = (): JSX.Element => {
    const [addPassegerPopupOpened, setaddPassegerPopupOpened] = useState(false);
    return (
        <div className='passenger-page-root'>
            <SearchComponent></SearchComponent>
            <CustomTable passengers={[]}></CustomTable>
            <div className='bottom-buttons-bar'>
                <PrimaryButton onClicked={() => { setaddPassegerPopupOpened(true); }} icon={<UserProfileIcon className={""} />} text='Add new Passenger'></PrimaryButton>
            </div>
            <GlobalPopup heightInPercent={85} widthInPercent={85} isOpen={addPassegerPopupOpened} onClose={()=> {setaddPassegerPopupOpened(false); }}>
                <>
                    <NewPassensengerComponent/>
                </>
            </GlobalPopup>
        </div>
    )
}

export default PassengersPage