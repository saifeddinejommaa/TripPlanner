import { SearchIcon } from "../../icons/SearchIcon";
import "./style.css"
interface Props {
}
export const SearchField = ({
    
}: Props): JSX.Element => {
  return (
    <div className="search-field">
      <div className="search-field-text">What are you looking for?</div>
        <div className="search-button-content">
        <SearchIcon></SearchIcon>
        </div>
    </div>
  );
}