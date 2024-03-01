import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SectionCar, PagDiv } from '../Popular/Popular.styled';
import { deleteFavoriteAdverstisementsByID, getAdvFav, getAdverstisements, postFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import { Link, useNavigate } from 'react-router-dom';
import { selectAdverstisements, selectNumberAdv } from 'redux/advertisment/selectors';
import { FavoritFilled } from 'components/HomePage/AdvertisementCardSVG';
import { Favorit } from 'components/SearchList/SearchListSVG';
import { leftArrow, rightArrow } from './NewCarsSvg';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const NewCars = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();
  const LogedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const advertisements = useSelector(selectAdverstisements);
  const paginPage = useSelector(selectNumberAdv);
  
  const startPage = Math.max(1, pageIndex - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  const visiblePages = Array.from({ length: 5 }, (_, index) => endPage - 4 + index).filter(
    num => num > 0 && num <= totalPages
  );

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

   useEffect(() => {
     // Отримуємо дані оголошень та оновлюємо totalPages з paginPage
     dispatch(getAdverstisements({ size: 6, page: pageIndex })).then(() => {
       if (paginPage) {
         const match = paginPage.match(/\d+/);
         const number = match ? match[0] : null;
         setTotalPages(Math.ceil(number / 6));
       }
     });
     dispatch(getAdvFav());
   }, [dispatch, pageIndex, advertisements.length, paginPage]);

  const handleToggleFavorite = (id) => {
    if (!LogedIn) {
      navigate('/authorization');
      return;
    }
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

   const nextPage = () => {
     setPageIndex(pageIndex + 1);
   };

   const prevPage = () => {
     if (pageIndex > 0) {
       setPageIndex(pageIndex - 1);
     }
   };

  return (
    <PagDiv>
      <SectionCar>
        <h2 className="carTitle">Нові оголошення</h2>
        <div className='centrDiv'>
        <ul className="carList" >
        {advertisements
          ? advertisements.map(ad => {
              let car = ad.car;
              return (
                <li className="carItem" key={ad.id}>
                  <Link className='carLink' to={`/AdvertisementByID/${ad.id}`} >
                     <img className="imgCar" src={ad.previewImage} alt="Car " />      
  
                    <h3 className="blackTitle ">
                      {car.brand} {car.model} {car.year}
                    </h3>
                    <ul className="carDescrList">
                      <li>
                        <p className="carDescrPrice">$ {car.price}</p>
                      </li>
                      <li className="cityRight">
                        <p className="carDescrCity">{ad.region}</p>
                      </li>
                    </ul>
                  </Link>
                  <button
                    className="button-fav"
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
        </div>
      </SectionCar>
    </PagDiv>
  );
};
export default NewCars;
