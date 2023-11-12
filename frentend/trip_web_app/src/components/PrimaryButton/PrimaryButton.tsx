
import './style.css';
interface Props {
    text: string
    icon?:JSX.Element,
    onClicked: () => void;
}
export const PrimaryButton = ({
  text, icon,
  onClicked
}: Props): JSX.Element => {
  return (<button className='button-primary' onClick={onClicked}
>{icon!=null ?<div className='botton-icon-content'>{icon}{text}</div>:text}</button>);
}