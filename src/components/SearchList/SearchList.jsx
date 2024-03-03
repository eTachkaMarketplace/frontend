import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchListDiv } from './SearchList.styled';
import { CarItemStyled } from '../UserAnnouncement/CarItem.styled';
import { CarSVG, DateSVG, Favorit, FavoritFilled, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from './SearchListSVG';
import { selectAdverstisements, selectNumberAdv } from 'redux/advertisment/selectors';
import {
  getAdvFav,
  postFavoriteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
} from 'redux/advertisment/operations';
import { Link, useNavigate } from 'react-router-dom';
import { leftArrow, rightArrow } from 'components/Main/New/NewCarsSvg';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const SearchList = ({
  setSort,
  favorites,
  setFavorites,
  setTotalPages,
  totalPages,
  setPageIndex,
  pageIndex,
}) => {
  const cars = useSelector(selectAdverstisements);
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const LogedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [resultNum, setResultNum] = useState(0);
  const paginPage = useSelector(selectNumberAdv);
  const startPage = Math.max(1, pageIndex - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  const visiblePages = Array.from({ length: 5 }, (_, index) => endPage - 4 + index).filter(
    num => num > 0 && num <= totalPages
  );

  useEffect(() => {
    if (paginPage) {
      const match = paginPage.match(/\d+/);
      const number = match ? match[0] : null;
      setResultNum(number);
      const calculatedTotalPages = Math.ceil(number / 8);

      if (calculatedTotalPages !== totalPages) {
        setTotalPages(calculatedTotalPages);
      }
    }
  }, [paginPage, setTotalPages, totalPages]);

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

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

  const handleToggleFavorite = id => {
    if (!LogedIn) {
      navigate('/authorization');
      return;
    }
    if (Array.isArray(favorites)) {
      if (favorites.includes(id)) {
        dispatch(deleteFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => prevFavorites.filter(favoriteId => favoriteId !== id))) // используйте функцию обновления состояния
          .catch(error => console.error('Failed to remove advertisement from favorites', error));
        setTimeout(() => {
          dispatch(getAdvFav());
        }, 500);
      } else {
        dispatch(postFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => [...prevFavorites, id])) // используйте функцию обновления состояния
          .catch(error => console.error('Failed to add advertisement to favorites', error));
        setTimeout(() => {
          dispatch(getAdvFav());
        }, 500);
      }
    } else {
      dispatch(postFavoriteAdverstisementsByID({ id }))
        .then(() => setFavorites([...favorites, id]))
        .catch(error => console.error('Failed to add advertisement to favorites', error));
      setTimeout(() => {
        dispatch(getAdvFav());
      }, 500);
    }
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

  return (
    <SearchListDiv>
      <div>
        <div className="titleDiv">
          <h2 className="title">Результати пошуку ({resultNum}):</h2>
          {screenWidth > 769&&<select className="select" name="select" onChange={handleSelectChange}>
            <option value="foData">За датою додавання</option>
            <option value="cheap">Від дешевших</option>
            <option value="expensive">Від дорожчих</option>
          </select>}
        </div>
        <div className="carsMainList">
          {cars && cars.length > 0 && (
            <ul className="carsDiv">
              {cars.map(car => (
                <CarItem
                  key={car.id}
                  car={car}
                  isFavorite={favorites.includes(car.id)}
                  toggleFavorite={handleToggleFavorite}
                />
              ))}
            </ul>
          )}
          {(!cars || cars.length === 0) && ( // Улучшенное условие отображения сообщения об ошибке
            <h2 className="enotherONe">Нічого не знайдено, виберіть інший фільтр</h2>
          )}
        </div>
        {cars.length > 0 ? (
          <div className="paginDiv">
            <button
              className={`pagination-button-arrow ${pageIndex === 0 ? 'disabled' : ''} `}
              onClick={prevPage}
              disabled={pageIndex === 0}
            >
              {leftArrow}
            </button>
            {visiblePages.map(pageNum => (
              <button
                key={pageNum}
                className={`pagination-button ${pageIndex === pageNum - 1 ? 'active' : ''}`}
                onClick={() => setPageIndex(pageNum - 1)}
              >
                {pageNum}
              </button>
            ))}
            <button
              className={`pagination-button-arrow ${pageIndex === totalPages - 1 ? 'disabled' : ''}`}
              onClick={nextPage}
              disabled={pageIndex === totalPages - 1}
            >
              {rightArrow}
            </button>
          </div>
        ) : null}
      </div>
    </SearchListDiv>
  );
};

export const CarItem = ({ car, isFavorite, toggleFavorite }) => {
  const desc = car.car;

  return (
    <CarItemStyled>
      <div>
        <img className="img" src={car.previewImage} alt="car" />
      </div>
      <div className="infoDiv">
        <div className="modelInfoDIV">
          <Link to={`/AdvertisementByID/${car.id}`}>
            <h2 className="modelInfo">
              {desc.brand} {desc.model} {desc.year}
            </h2>
          </Link>
          <h2 className="modelInfo">{desc.price}$</h2>
        </div>
        <div className="numberDiv">
          {desc.licensePlate && <h3 className="number">{desc.licensePlate}</h3>}
          {desc.vin && <h3 className="number">{desc.vin}</h3>}
        </div>
        <div className="listDIV">
          <ul className="list">
            <li className="itemLI">
              <DateSVG />
              {desc.year}
            </li>
            <li className="itemLI">
              <LockSVG />
              {car.region}
            </li>
            <li className="itemLI">
              <SpeedometerSVG />
              {desc.mileage}
            </li>
          </ul>
          <ul className="list">
            <li className="itemLI">
              <PetrolSVG />
              {desc.engineType}
            </li>
            <li className="itemLI">
              <SlideSVG />
              {desc.driveType}
            </li>
            <li className="itemLI">
              <CarSVG />
              {desc.transmissionType}
            </li>
          </ul>
        </div>
        <button className="favoriteBTN" type="button" onClick={() => toggleFavorite(car.id)}>
          {isFavorite ? <FavoritFilled /> : <Favorit />}
        </button>
      </div>
    </CarItemStyled>
  );
};

export default SearchList;

//           {cars && cars.length > 0  ? (
//             <ul className='carsDiv'>
//               {cars.map(car => {
//                 const desc = car.car;
//                 return (
//                   <li key={car.id} className="carItem">
//                     <div>
//                       <img className="img" src={car.previewImage} alt="car" />
//                     </div>
//                     <div className="infoDiv">
//                       <div className="modelInfoDIV">
//                         <h2 className="modelInfo">
//                           {desc.brand} {desc.model} {desc.year}
//                         </h2>
//                         <h2 className="modelInfo">{desc.price}$</h2>
//                       </div>
//                       <div className="numberDiv">
//                         {desc.licensePlate &&<h3 className="number">{desc.licensePlate}</h3>}
//                         {desc.vin && <h3 className="number">{desc.vin}</h3>}
//                       </div>
//                       <div className="listDIV">
//                         <ul className="list">
//                           <li className="itemLI">
//                             <DateSVG />
//                             {desc.year}
//                           </li>
//                           <li className="itemLI">
//                             <LockSVG />
//                             {car.region}
//                           </li>
//                           <li className="itemLI">
//                             <SpeedometerSVG />
//                             {desc.mileage}
//                           </li>
//                         </ul>
//                         <ul className="list">
//                           <li className="itemLI">
//                             <PetrolSVG />
//                             {desc.engineType}
//                           </li>
//                           <li className="itemLI">
//                             <SlideSVG />
//                             {desc.driveType}
//                           </li>
//                           <li className="itemLI">
//                             <CarSVG />
//                             {desc.transmissionType}
//                           </li>
//                         </ul>
//                       </div>
//                       <button className="favoriteBTN" type="button">
//                         <Favorit />
//                       </button>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           ) : (
//             <h2 className='enotherONe'>Нічого не знайдено, виберіть другий фільтр</h2>
