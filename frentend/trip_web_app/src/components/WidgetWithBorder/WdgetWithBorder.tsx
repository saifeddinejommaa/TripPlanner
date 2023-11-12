import { Children } from 'react';
import './style.css';
interface Props {
    child?:JSX.Element 
}
export const WidgetWithBorder = ({
    child
}: Props): JSX.Element => {
    return( <div className='widget-with-border'>{child}</div>);
}