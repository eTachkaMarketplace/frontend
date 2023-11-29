import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';

const SearchPage = () => {
  return (
    <>
      <Wraper>
        <SearchForm />
        <div className="searchList">
          <SearchListTab/>
          <SearchList />
        </div>
      </Wraper>
    </>
  );
};
export default SearchPage;
