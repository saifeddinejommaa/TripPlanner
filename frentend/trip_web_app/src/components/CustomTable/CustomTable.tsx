import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import './style.css';
import '@aprilium/tripsm_passenger/lib/models/Passenger'
import { CustomTableRow } from './CustomTableRow';
import { useState } from 'react';
interface Props {
    passengers: Array<Passenger>|undefined |null
}
export const CustomTable = ({ passengers
}: Props): JSX.Element => {
  const [allRowsChecked, setAllRowsChecked] = useState(false);
  const handleChange = () => {
    setAllRowsChecked(!allRowsChecked);
  };
  return (<div className='table-content'>
    <table className='custom-table'>
    <tr>
      <th style={{ width: 40 }} className='column-header'>
        <label >
        <input className="checkbox" type="checkbox"  
        checked={allRowsChecked}
          onChange={handleChange} />
        </label>
      </th>
      <th style={{ width: 40 }} className='column-header'>N°</th>
      <th style={{ width: 180 }} className='column-header'>Full name</th>
      <th style={{ width: 180 }} className='column-header'>Full name Arabe</th>
      <th style={{ width: 180 }} className='column-header'>Birth Date</th>
      <th style={{ width: 60 }} className='column-header'>Age</th>
      <th style={{ width: 180}} className='column-header'>N°Passeport</th>
      <th  style={{ width: 180 }} className='column-header'>N°Visa</th>
      <th style={{ width: 180 }} className='column-header'>Nationality</th>
      <th style={{ width: 180 }} className='column-header'>Action</th>
    </tr>
    {passengers?.map((passenger)=><CustomTableRow passenger={passenger}></CustomTableRow>)}
  </table></div>);
}