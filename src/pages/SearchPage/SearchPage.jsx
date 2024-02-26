import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'modal/modal';
import { getAdverstisements } from 'redux/advertisment/operations';
import ConfirmModal from 'modal/confirmModal/confirmModal';

const SearchPage = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState('new');
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
    const resizeObserver = new ResizeObserver(entries => {
      const newWidth = entries[0]?.contentRect?.width;
      if (newWidth && newWidth !== screenWidth) {
        setScreenWidth(newWidth);
      }
    });

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [screenWidth]);

  const handleSelectChange = event => {
    const selectedValue = event.target.value;

    if (selectedValue === 'foData') {
      setSort('new');
    } else if (selectedValue === 'cheap') {
      setSort('cheap');
    } else if (selectedValue === 'expensive') {
      setSort('expensive');
    }
  };

  useEffect(() => {
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
        {screenWidth <= 390 ? (
          <div>
            <h3 className="title">Розширений пошук</h3>
            <select className="select" name="select" onChange={handleSelectChange}>
              <option value="foData">За датою додавання</option>
              <option value="cheap">Від дешевших</option>
              <option value="expensive">Від дорожчих</option>
            </select>
          </div>
        ) : null}
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
