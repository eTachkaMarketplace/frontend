import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'modal/modal';
import { getAdverstisements } from 'redux/advertisment/operations';
import ConfirmModal from 'modal/confirmModal/confirmModal';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [sort, setSort ] = useState("new");
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
    setTimeout(() => {
      const queryParams = Object.entries(valuesGen)
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      dispatch(getAdverstisements({ size: 8, page: 0, queryParams, sort: sort }));
    }, 1000)
  }, [dispatch, sort, valuesGen]);



  return (
    <>
      <Wraper>
        <SearchForm initialValues={valuesGen} onSubmit={handleSearch} />
        <div className="searchList">
          <SearchListTab initialValues={valuesGen} onSubmit={handleSearch} />
          <SearchList setSort={setSort} />
        </div>
      </Wraper>
      <Modal >
        <ConfirmModal handleSearch={handleSearch} />
      </Modal>
    </>
  );
};
export default SearchPage;
