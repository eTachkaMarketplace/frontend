import { SearchListDiv } from "./SearchList.styled";
import { Arrow } from "./SearchListSVG";

export const SearchList = () => {
  return (
    <SearchListDiv>
      <h2 className="title">Результати пошуку (2):</h2>
      <select className="select" name="select">
        <option value="foData">За датою додавання</option>
        <option value="cheap">Від дешевших</option>
        <option value="expensive">Від дорожчих</option>
      </select>
    </SearchListDiv>
  );
};
export default SearchList;
