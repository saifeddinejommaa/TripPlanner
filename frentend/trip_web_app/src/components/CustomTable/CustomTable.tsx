import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import './style.css';
import '@aprilium/tripsm_passenger/lib/models/Passenger'
import { CustomTableRow } from './CustomTableRow';
interface Props {
    passengers: Passenger[] |undefined
}
export const CustomTable = ({ passengers
}: Props): JSX.Element => {
  return (<div className='table-content'>
    <table className='custom-table'>
    <tr>
      <th style={{ width: 40 }} className='column-header'>N°</th>
      <th style={{ width: 180 }} className='column-header'>FullName</th>
      <th style={{ width: 180 }} className='column-header'>BirthDate</th>
      <th style={{ width: 60 }} className='column-header'>Age</th>
      <th style={{ width: 180}} className='column-header'>N°Passeport</th>
      <th  style={{ width: 180 }} className='column-header'>N°Visa</th>
      <th style={{ width: 180 }} className='column-header'>Nationality</th>
      <th style={{ width: 100 }} className='column-header'>Action</th>
    </tr>
    {passengers?.map((passenger)=><CustomTableRow passenger={passenger}></CustomTableRow>)}
  </table></div>);
}