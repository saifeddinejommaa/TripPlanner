import React, { useEffect, useState } from 'react'
import { SearchComponent } from '../../components/SearchComponent/SearchComponent'
import './style.css';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { UserProfileIcon } from '../../icons/UserProfileIcon';
import { GlobalPopup } from '../../components/Popup/GlobalPopup';
import { NewPassensengerComponent } from '../../components/passengers/NewPassenger/NewPassengerComponent';
import {useDispatch, useSelector} from 'react-redux';
import {PagedResult} from '@aprilium/tripsm_common/lib/models/PagedResult';
import {getAllPassengersList} from  '@aprilium/tripsm_passenger/lib/selectors';
import {PassengerActions} from '@aprilium/tripsm_passenger/lib/state'
import PassengersParameter from '@aprilium/tripsm_passenger/lib/models/PassengersParameters';

export const PassengersPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const parameters: PassengersParameter = {
        pageSize:25,
        pageNumber: 1,
        sortColumn: 'Id',
        SortOrder: 'ASC',
        dropdown: 1,
        table:1,
        sortOrder: "Id",
        all: true,
      };
    const passengers: PagedResult<Passenger> |undefined |null =
    useSelector(getAllPassengersList);
    useEffect(() => {
          dispatch(PassengerActions.getAllPassengers(parameters));
         // dispatch(PassengerActions.getPassenger(7));
      });
    const [addPassegerPopupOpened, setaddPassegerPopupOpened] = useState(false);
    return (
        <div className='passenger-page-root'>
            <SearchComponent></SearchComponent>
            <CustomTable passengers={passengers?.Results}></CustomTable>
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