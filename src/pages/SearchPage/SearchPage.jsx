import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'modal/modal';
import { getAdverstisements } from 'redux/advertisment/operations';
import ConfirmModal from 'modal/confirmModal/confirmModal';

const SearchPage = ({ favorites ,setFavorites}) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState('new');
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
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
  const firstRender = useRef(true);

  const handleSearch = values => {
    setValuesGen(values);
  };

  useEffect(() => {
    console.log('useEffect is called');

    if (!firstRender.current) {
      const queryParams = Object.entries(valuesGen)
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      dispatch(getAdverstisements({ size: 8, page: pageIndex, queryParams, sort: sort }));
    } else {
      firstRender.current = false;
    }
  }, [dispatch, pageIndex, sort, valuesGen]);

  return (
    <>
      <Wraper>
        <SearchForm initialValues={valuesGen} onSubmit={handleSearch} />
        <div className="searchList">
          <SearchListTab initialValues={valuesGen} onSubmit={handleSearch} />
          <SearchList
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            setSort={setSort}
            favorites={favorites}
            setFavorites={setFavorites}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </div>
      </Wraper>
      <Modal>
        <ConfirmModal handleSearch={handleSearch} />
      </Modal>
    </>
  );
};
export default SearchPage;
