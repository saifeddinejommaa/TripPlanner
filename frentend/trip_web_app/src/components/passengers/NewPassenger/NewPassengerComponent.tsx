

import { useState } from 'react'
import PassportIcon from '../../../icons/PassportIcon'
import EmptyUserPhoto from '../../../icons/emptyUserPhoto'
import { GlobalDatePicker } from '../../GlobalDatePicker/GlobalDatePicker'
import { PrimaryButton } from '../../PrimaryButton/PrimaryButton'
import { SearchField } from '../../SearchField/SearchField'
import { SecondaryButton } from '../../SecondaryButton/SecondaryButton'
import { CustomTextField } from '../../TextField/TextField'
import { WidgetWithBorder } from '../../WidgetWithBorder/WdgetWithBorder'
import { UserPhotoBloc } from '../../userPhotoBloc/userPhotoBloc'
import './style.css'
interface Props { }
export const NewPassensengerComponent = ({
}: Props): JSX.Element | null => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [profession, setProfession] = useState('');
    const [gender, setGender] = useState('');
    const [passportN, setpassportN] = useState('');
    const [deliveryCountry, setDeliveryCountry] = useState('');
    const [visaType, setvisaType] = useState('');
    const [visaN, setvisaN] = useState('');
    return (<div className='new-passenger'>
        <h5>New Passenger</h5>
        <WidgetWithBorder child={<CustomTextField onChange={(text:string)=> setFirstName(text)} label='Group' defaultText='Select one'></CustomTextField>} />
        <div className='bloc_info'>
            <h5>Personnal information</h5>
            <div className='user-info-content'>
                <div className='user-info-fields'>
                    <table >
                        <tr>
                            <th><CustomTextField onChange={(text:string)=> setFirstName(text)} defaultText="" label="First Name"></CustomTextField></th>
                            <th><CustomTextField  onChange={(text:string)=> setLastName(text)}  defaultText="" label="Last Name"></CustomTextField></th>
                        </tr>
                        <tr>
                            <th><GlobalDatePicker placeholder="BirthDate" onChange={() => { }} defaultText="" label="BirthDate"></GlobalDatePicker></th>
                            <th><CustomTextField  onChange={(text:string)=> setBirthPlace(text)}  defaultText="" label="Birth Place"></CustomTextField></th>
                            <th><CustomTextField  onChange={(text:string)=> setProfession(text)}  defaultText="" label="Profession"></CustomTextField></th>
                        </tr>
                        <tr>
                            <th><CustomTextField  onChange={(text:string)=> setGender(text)}  defaultText="" label="Gender"></CustomTextField></th>
                        </tr>
                    </table>
                </div>
                <div className='passport-info'>
                    <div className='passeport-info-container'>
                        <UserPhotoBloc />
                        <div>
                            <div className='passeport-container'>
                                <WidgetWithBorder child={<PassportIcon />}></WidgetWithBorder>
                                <SecondaryButton text='scan passeport' onClicked={() => { }}></SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bloc_info'>
            <h5>Passeport information</h5>
            <div className='passeport-info'>
                <table className='passeport-info-fields'>
                    <tr>
                        <th><CustomTextField  onChange={(text:string)=> setpassportN(text)}   defaultText="" label="N° Passeport"></CustomTextField></th>
                        <th><CustomTextField  onChange={(text:string)=> setDeliveryCountry(text)}   defaultText="" label="Delivery country"></CustomTextField></th>
                        <th><GlobalDatePicker onChange={() => { }} placeholder="Issuance Date" defaultText="" label="Issuance Date"></GlobalDatePicker></th>
                        <th><GlobalDatePicker  placeholder="Expiration Date" onChange={() => { }} defaultText="" label="Expiration Date"></GlobalDatePicker></th>
                        <th><CustomTextField  onChange={(text:string)=> setGender(text)}   defaultText="" label="Actual Nationality"></CustomTextField></th>
                    </tr>
                </table>
            </div>
        </div>
        <div className='visa-information'>
            <h5>VISA</h5>
            <div className='visa-info'>
                <table className='visa-info-fields'>
                    <tr>
                        <th><CustomTextField  onChange={(text:string)=> setvisaType(text)}  defaultText="" label="Visa Type"></CustomTextField></th>
                        <th><CustomTextField  onChange={(text:string)=> setvisaN(text)} defaultText="" label="N° VISA"></CustomTextField></th>
                        <th><CustomTextField  onChange={(text:string)=> setGender(text)}  defaultText="" label="Del. Country"></CustomTextField></th>
                        <th><GlobalDatePicker placeholder="Del. Date" onChange={() => { }} defaultText="" label="Del. Date"></GlobalDatePicker></th>
                    </tr>
                </table>
            </div>
        </div>
        <div className='contact-information'>
            <h5>Contact information</h5>
            <div className='contact-info'>
                <table className='contact-info-fields'>
                    <tr>
                        <th><CustomTextField  onChange={(text:string)=> setpassportN(text)} defaultText="" label="N° Passeport"></CustomTextField></th>
                        <th><CustomTextField onChange={(text:string)=> setDeliveryCountry(text)}  defaultText="" label="Delivery country"></CustomTextField></th>
                        <th><GlobalDatePicker placeholder="Issuance Date" onChange={() => { }} defaultText="" label="Issuance Date"></GlobalDatePicker></th>
                    </tr>
                </table>
            </div>
        </div>
        
        <div className='bottom-buttons-bar'>
            <SecondaryButton text='Cancel' onClicked={() => { }}></SecondaryButton>
            <PrimaryButton onClicked={() => { }} text='Add Passenger'></PrimaryButton>
        </div>
    </div>)
}