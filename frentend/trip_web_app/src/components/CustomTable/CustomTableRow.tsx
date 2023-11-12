import Passenger from '@aprilium/tripsm_passenger/lib/models/Passenger';
import './style.css';
import '@aprilium/tripsm_passenger/lib/models/Passenger'
interface Props {
    passenger: Passenger
}
export const CustomTableRow = ({ passenger
}: Props): JSX.Element => {
    return <tr>
    <td className='column-header'>{passenger.PassengerId}</td>
    <td>{passenger.FirstName}</td>
    <td>{passenger.FirstName}</td>
    <td>{passenger.BirthDay?.toString()}</td>
    <td>{30}</td>
    <td>{passenger.Address1}</td>
    <td>{passenger.Address1}</td>
    <td>{passenger.Nationality}</td>
  </tr>
}