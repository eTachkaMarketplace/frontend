import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'modal/modal';
import { getAdverstisements } from 'redux/advertisment/operations';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [valuesGen, setValuesGen] = useState({
    category: '',
    brand: '',
    model: '',
    region: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
    bodyType: '',
    engineType: '',
    engineVolumeMin: '',
    engineVolumeMax: '',
    mileageMax: '',
    driveType: '',
    transmissionType: '',
    technicalState: '',
    color: '',
  });

  const handleSearch = values => {
    setValuesGen(values);
  };

  useEffect(() => {
    const keys = Object.keys(valuesGen);
    const nonEmptyKeys = keys.filter(key => valuesGen[key] !== '');
    const nonEmptyValues = {};
    nonEmptyKeys.forEach(key => {
      nonEmptyValues[key] = valuesGen[key];
    });
    const filteredValues = nonEmptyValues;
    console.log(filteredValues);

    dispatch(getAdverstisements({ size: 8, page: 0, filter: filteredValues, sortBy: 'unsorted' }));
  }, [dispatch, valuesGen]);



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
