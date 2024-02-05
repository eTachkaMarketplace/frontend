import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchListDiv } from './SearchList.styled';
import { CarSVG, DateSVG, Favorit, FavoritFilled, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from './SearchListSVG';
import { selectAdverstisements } from 'redux/advertisment/selectors'; 
import {
  postFavoriteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
} from 'redux/advertisment/operations';

export const SearchList = ({ setSort, favorites ,setFavorites }) => {
  const cars = useSelector(selectAdverstisements);
  const dispatch = useDispatch();
  
 
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
    if (Array.isArray(favorites)) {
      if (favorites.includes(id)) {
        dispatch(deleteFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => prevFavorites.filter(favoriteId => favoriteId !== id))) // используйте функцию обновления состояния
          .catch(error => console.error('Failed to remove advertisement from favorites', error)); // Обработка ошибки
      } else {
        dispatch(postFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => [...prevFavorites, id])) // используйте функцию обновления состояния
          .catch(error => console.error('Failed to add advertisement to favorites', error)); // Обработка ошибки
      }
    } else {
      dispatch(postFavoriteAdverstisementsByID({ id }))
        .then(() => setFavorites([...favorites, id]))
        .catch(error => console.error('Failed to add advertisement to favorites', error));
    }
  };

  return (
    <SearchListDiv>
      <div>
        <div className="titleDiv">
          <h2 className="title">Результати пошуку (2):</h2>
          <select className="select" name="select" onChange={handleSelectChange}>
            <option value="foData">За датою додавання</option>
            <option value="cheap">Від дешевших</option>
            <option value="expensive">Від дорожчих</option>
          </select>
        </div>
        <div className="carsMainList">
          {cars &&
            cars.length > 0 && ( // Улучшенное условие отображения сообщения об ошибке
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
          )}
        </div>
      </div>
    </SearchListDiv>
  );
};

export const CarItem = ({ car, isFavorite, toggleFavorite }) => {
  const desc = car.car;

  return (
    <li className="carItem">
      <div>
        <img className="img" src={car.previewImage} alt="car" />
      </div>
      <div className="infoDiv">
        <div className="modelInfoDIV">
          <h2 className="modelInfo">
            {desc.brand} {desc.model} {desc.year}
          </h2>
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
    </li>
  );
};

export default SearchList;