import React from "react";
import { TextField } from "@mui/material"; 
import './style.css'
import EmptyUserPhoto from "../../icons/emptyUserPhoto";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";
interface Props {
}

export const UserPhotoBloc = ({
  }: Props): JSX.Element => {return(
    <div className="user-photo-bloc">
<div className="user-photo-bloc-container">
  <EmptyUserPhoto></EmptyUserPhoto>
  <SecondaryButton text="Scan Photo" onClicked={()=>{}}></SecondaryButton>
</div>
<div>
</div>
</div>
  );}