import { DropDownCollapsedIcon } from '../../icons/DropDownCollapsedIcon';
import { MessagesIcon } from '../../icons/MessagesIcon';
import { NotificationsIcon } from '../../icons/NotificationsIcon';
import './style.css'

interface Props {
}
export const UserComponent = ({
  
}: Props): JSX.Element => {
  return (<div className="buttons-content">
  <div className="button1-content">
      <MessagesIcon/>
  </div>
  <div className="button2-content">
      <NotificationsIcon/>
  </div>
  <div className='avatar-content'>
        <img className='avatar'/>
    </div>
<div className='user-name-content'>
    <div className='user-name'>Philip Jonas</div>
</div>
<div className='drop-down-content'>
    <DropDownCollapsedIcon></DropDownCollapsedIcon>
</div>
</div>);
}