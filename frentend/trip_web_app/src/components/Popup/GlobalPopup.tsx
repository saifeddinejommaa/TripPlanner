
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { CustomTextField } from '../TextField/TextField';
import './style.css'
interface Props { onClose: () => void;
    isOpen:boolean;
    widthInPercent:number;
    heightInPercent: number;
    children:JSX.Element }
export const GlobalPopup = ({onClose, children,isOpen, heightInPercent,widthInPercent
}: Props): JSX.Element|null => {
    
    if (!isOpen) return null;
    return(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    overflowY: "auto",
                    overflowX:"hidden",
                    height: `${heightInPercent}%`,
                    width: `${widthInPercent}%`,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #FFFFFF",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
            </div>
        </div>
    );}