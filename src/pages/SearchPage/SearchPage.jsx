import SearchForm from "components/SearchForm/SearchForm";
import SearchList from "components/SearchList/SearchList";
import { Wraper } from "./SearchPage.styled";

const SearchPage = () => {
  return (
    <>
      <Wraper>
        <SearchForm />
        <SearchList />
      </Wraper>
    </>
  );
};
export default SearchPage;
