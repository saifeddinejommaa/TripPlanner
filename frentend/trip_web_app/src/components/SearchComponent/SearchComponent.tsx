import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { CustomTextField } from '../TextField/TextField';
import './style.css'
interface Props { }
export const SearchComponent = ({
}: Props): JSX.Element => {
  return (<div className="search_container" >

    <div className="search-label">Search by</div>
    <div className='search_elements'>
      <table className='search-table'>
        <tr>
          <th><CustomTextField onChange={(text:string)=>{}} defaultText="" label="First Name"></CustomTextField></th>
          <th><CustomTextField onChange={(text:string)=>{}} defaultText="" label="Last Name"></CustomTextField></th>
          <th><CustomTextField onChange={(text:string)=>{}} defaultText="" label="N° Passport"></CustomTextField></th>
          <th><CustomTextField onChange={(text:string)=>{}} defaultText="" label="Group"></CustomTextField></th>
        </tr>
        <tr>
          <th><CustomTextField onChange={(text:string)=>{}} defaultText="" label="N° Visa"></CustomTextField></th>
        </tr>
      </table>
        <div className='button-container'>
          <div className='button'>
      <PrimaryButton onClicked={()=>{}}  text='Search' ></PrimaryButton></div>
      </div>
      </div>
  </div>);
}