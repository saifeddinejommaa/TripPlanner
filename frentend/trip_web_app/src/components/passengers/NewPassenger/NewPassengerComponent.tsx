

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
    return (<div className='new-passenger'>
        <h5>New Passenger</h5>
        <WidgetWithBorder child={<CustomTextField label='Group' defaultText='Select one'></CustomTextField>} />
        <div className='bloc_info'>
            <h5>Personnal information</h5>
            <div className='user-info-content'>
                <div className='user-info-fields'>
                    <table >
                        <tr>
                            <th><CustomTextField defaultText="" label="First Name"></CustomTextField></th>
                            <th><CustomTextField defaultText="" label="Last Name"></CustomTextField></th>
                        </tr>
                        <tr>
                            <th><GlobalDatePicker placeholder="BirthDate" onChange={() => { }} defaultText="" label="BirthDate"></GlobalDatePicker></th>
                            <th><CustomTextField defaultText="" label="Birth Place"></CustomTextField></th>
                            <th><CustomTextField defaultText="" label="Profession"></CustomTextField></th>
                        </tr>
                        <tr>
                            <th><CustomTextField defaultText="" label="Gender"></CustomTextField></th>
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
                        <th><CustomTextField defaultText="" label="N° Passeport"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Delivery country"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Issuance Date"></CustomTextField></th>
                        <th><GlobalDatePicker placeholder="Expiration Date" onChange={() => { }} defaultText="" label="Expiration Date"></GlobalDatePicker></th>
                        <th><CustomTextField defaultText="" label="Actual Nationality"></CustomTextField></th>
                    </tr>
                    <tr>
                        <th><CustomTextField defaultText="" label="Previous Nationality"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="ID card Number"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Del. Country"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Birth Place"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Profession"></CustomTextField></th>
                    </tr>
                </table>
            </div>
        </div>
        <div className='visa-information'>
            <h5>VISA</h5>
            <div className='visa-info'>
                <table className='visa-info-fields'>
                    <tr>
                        <th><CustomTextField defaultText="" label="Visa Type"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="N° VISA"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Del. Country"></CustomTextField></th>
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
                        <th><CustomTextField defaultText="" label="N° Passeport"></CustomTextField></th>
                        <th><CustomTextField defaultText="" label="Delivery country"></CustomTextField></th>
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