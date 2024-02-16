import { useDispatch, useSelector } from 'react-redux';
import { SectionCar } from './Popular.styled';

import { selectPopAdvers } from 'redux/advertisment/selectors';
import { Link } from 'react-router-dom';
import {
  deleteFavoriteAdverstisementsByID,
  getAdvFav,
  getPopAdvers,
  postFavoriteAdverstisementsByID,
} from 'redux/advertisment/operations';
import { useEffect } from 'react';
import { FavoritFilled } from 'components/HomePage/AdvertisementCardSVG';
import { Favorit } from 'components/SearchList/SearchListSVG';

const Catalog = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();
  const advertisements = useSelector(selectPopAdvers).slice(0, 3);

  useEffect(() => {
    dispatch(getPopAdvers({ size: 3, page: 0 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

  const handleToggleFavorite = id => {
    if (Array.isArray(favorites)) {
      if (favorites.includes(id)) {
        dispatch(deleteFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => prevFavorites.filter(favoriteId => favoriteId !== id)))
          .catch(error => console.error('Failed to remove advertisement from favorites', error));

        setTimeout(() => {
          dispatch(getAdvFav());
        }, 500);
      } else {
        dispatch(postFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => [...prevFavorites, id]))
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

  return (
    <SectionCar>
      <h2 className="carTitle">Популярні</h2>
      <ul className="carList" >
        {advertisements
          ? advertisements.map(ad => {
              let car = ad.car;
              return (
                <li className="carItem" key={ad.id}>
                  <Link to={`/AdvertisementByID/${ad.id}`} >
                    <img className="imgCar" src={ad.previewImage} alt="Car " />

                    <h3 className="blackTitle ">
                      {car.brand} {car.model} {car.year}
                    </h3>
                    <ul className="carDescrList">
                      <li>
                        <p className="carDescrPrice">$ {car.price}</p>
                      </li>
                      <li className="cityRight">
                        <p className="carDescrCity">{car.region}</p>
                      </li>
                    </ul>
                  </Link>
                  <button
                    className="svg"
                    type="button"
                    onClick={() => {
                      handleToggleFavorite(ad.id);
                    }}
                  >
                    {favorites.includes(ad.id) ? <FavoritFilled /> : <Favorit />}
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </SectionCar>
  );
};
export default Catalog;
