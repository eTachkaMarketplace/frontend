import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsFil } from 'redux/cars/selectors';
import { getCarsThunkFiltered } from 'redux/cars/operations';
import Modal from 'modal/modal';

const SearchPage = () => {
  const dispatch = useDispatch();
  const carsFilter = useSelector(selectCarsFil);
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
    engineCapacity: '',
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
  
  useEffect(() => {
    console.log(valuesGen);
    dispatch(getCarsThunkFiltered(valuesGen));
    
  }, [dispatch, valuesGen]);

console.log(carsFilter);

  return (
    <>
      <Wraper>
        <SearchForm initialValues={valuesGen} onSubmit={handleSearch} />
        <div className="searchList">
          <SearchListTab initialValues={valuesGen} onSubmit={handleSearch} />
          <SearchList />
        </div>
      </Wraper>
      <Modal handleSearch={handleSearch} />
    </>
  );
};
export default SearchPage;
