import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import './style.css';
import '@aprilium/tripsm_passenger/lib/models/Passenger'
import { useState } from 'react';
import DeleteIcon from '../../icons/DeleteIcon';
import EditIcon from '../../icons/EditIcon';
interface Props {
    passenger: Passenger
}
export const CustomTableRow = ({ passenger
}: Props): JSX.Element => {
  const [rowChecked, setRowChecked] = useState(false);
  const handleChange = () => {
    setRowChecked(!rowChecked);
  };
    return <tr>
    
    <td style={{ width: 40 }} className='row-even'>
        <label >
        <input className="checkbox" type="checkbox"  
        checked={rowChecked}
          onChange={handleChange} />
        </label>
    </td>
    <td style={{ width: 40 }} className='row-even'>{passenger.Id }</td>
    <td style={{ width: 180 }} className='row-even'>{passenger.FirstName +" "+ passenger.MiddleName+" "+passenger.LastName }</td>
    <td style={{ width: 180 }} className='row-even'>{ passenger.LocalFirstName +" "+passenger.LocalMiddleName+" "+passenger.LocalLastName }</td>
    <td style={{ width: 180 }} className='row-even'>{passenger.BirthDay?.toString()}</td>
    <td style={{ width: 60 }} className='row-even'>{30}</td>
    <td style={{ width: 180 }} className='row-even'>{"-------"}</td>
    <td style={{ width: 180 }} className='row-even'>{"-------"}</td>
    <td style={{ width: 180 }} className='row-even'>{passenger.Nationality}</td>
    <td style={{ width: 180 }} className='row-even' ><div className='actions-element'>
      <DeleteIcon></DeleteIcon>
      <EditIcon></EditIcon>
    </div>
    </td>
  </tr>
}