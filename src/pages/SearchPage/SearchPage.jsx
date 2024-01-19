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
    const queryParams = Object.entries(valuesGen)
      .filter(([key, value]) => value !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    dispatch(getAdverstisements({ size: 8, page: 0, queryParams, sortBy: 'unsorted' }));
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
