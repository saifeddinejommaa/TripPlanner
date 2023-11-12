import { SearchField } from "../SearchField/SearchField";
import { UserComponent } from "../UserComponent/UserComponent";
import "./style.css"
interface Props {
  }
export const NavBar = ({
    
  }: Props): JSX.Element => {
    return (
<div className="nav-bar">
    <div className="title-content" >Trip Planner</div>
    <div className="nav-bar-content">
      <SearchField></SearchField>
    </div>
    <UserComponent></UserComponent>
</div>
    );
  }