import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { Wraper } from './SearchPage.styled';
import SearchListTab from 'components/SearchLIstTAB/SearchListTab';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'modal/modal';
import { getAdverstisements } from 'redux/advertisment/operations';
import ConfirmModal from 'modal/confirmModal/confirmModal';
import { Thumbnails } from './Svg';

const SearchPage = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState('new');
  const [pageIndex, setPageIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

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

  const handleThumbnailsClick = () => {
    setIsDropdownVisible(prev => !prev);
  };

  const handleSelectChange = value => {
    if (value === 'foData') {
      setSort('new');
    } else if (value === 'cheap') {
      setSort('cheap');
    } else if (value === 'expensive') {
      setSort('expensive');
    }

    // Hide the dropdown after selection
    setIsDropdownVisible(false);
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
        {screenWidth <= 769 ? (
          <div className="menuDiv">
            <button type="button" className="titlePage" onClick={toggleMenu}>
              Розширений пошук
            </button>
            <div className="thumbnails-container" onClick={handleThumbnailsClick}>
              <Thumbnails />
            </div>
            <div className="dropBox" style={{ display: isDropdownVisible ? 'flex' : 'none' }}>
              <button
                className="dropBTN"
                type="button"
                onClick={() => {
                  handleSelectChange('new');
                }}
              >
                За датою додавання
              </button>
              <button
                className="dropBTN"
                type="button"
                onClick={() => {
                  handleSelectChange('cheap');
                }}
              >
                Від дешевших
              </button>
              <button
                className="dropBTN"
                type="button"
                onClick={() => {
                  handleSelectChange('expensive');
                }}
              >
                Від дорожчих
              </button>
            </div>
          </div>
        ) : null}
        {screenWidth <= 769 && openMenu && (
          <SearchForm toggleMenu={toggleMenu} initialValues={valuesGen} onSubmit={handleSearch} />
        )}
        {screenWidth <= 769 && !openMenu && (
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
        )}
        {screenWidth > 769 && <SearchForm initialValues={valuesGen} onSubmit={handleSearch} />}
        {screenWidth > 769 && (
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
        )}
      </Wraper>
      <Modal>
        <ConfirmModal handleSearch={handleSearch} />
      </Modal>
    </>
  );
};
export default SearchPage;
