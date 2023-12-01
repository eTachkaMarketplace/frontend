import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useState } from 'react';

const SearchPage = () => {
  const [valuesGen, setValuesGen] = useState({
    status: '',
    brand: '',
    model: '',
    region: '',
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: '',
    bodyType: '',
    fuelType: '',
    engineCapacityFrom: '',
    engineCapacityTo: '',
    mileageFrom: '',
    mileageTo: '',
    driveType: '',
    transmission: '',
    condition: '',
    color: '',
  });

  const handleSearch = values => {
    setValuesGen(values);
  };
    
  return (
    <>
      <Wraper>
        <SearchForm initialValues={valuesGen} onSubmit={handleSearch} />
        <div className="searchList">
          <SearchListTab initialValues={valuesGen} onSubmit={handleSearch} />
          <SearchList />
        </div>
      </Wraper>
    </>
  );
};
export default SearchPage;
