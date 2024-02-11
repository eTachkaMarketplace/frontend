import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverstisements, selectNumberAdv } from '../../redux/advertisment/selectors';
import { getAdverstisements } from '../../redux/advertisment/operations';
import AdvertisementSection from './AdvertisementSection';
import AdvertisementCard from './AdvertisementCard';
import { getAdvFav } from 'redux/advertisment/operations';
import { postFavoriteAdverstisementsByID, deleteFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import Pagination from '../Pagination/Pagination';

export default function NewCatalog({ favorites, setFavorites }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements);
  const paginPage = useSelector(selectNumberAdv);

  const firstList = advertisements.slice(0, 6);
  // const secondList = advertisements.slice(3, 6);

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

  const handleToggleFavorite = (id, event) => {
    event.stopPropagation(); 
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
    <AdvertisementSection name={'Нові оголошення'}>
      <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
        {firstList.map((advertisement, _) => (
          <AdvertisementCard
            key={advertisement.id}
            data={advertisement}
            isFavorite={favorites.includes(advertisement.id)}
            toggleFavorite={(event) => handleToggleFavorite(advertisement.id, event)}
          />
        ))}
      </div>
      <div className={'flex flex-row justify-center py-6'}>
        <Pagination totalPages={totalPages} pageIndex={pageIndex} onPageChange={page => setPageIndex(page)} />
      </div>
    </AdvertisementSection>
  );
}





      // {
      //   /* <div className={'flex flex-col md:flex-row gap-6'}>
      //   {secondList.map((advertisement, _) => (
      //     <AdvertisementCard
      //       key={advertisement.id}
      //       data={advertisement}
      //       isFavorite={favorites.includes(advertisement.id)}
      //       toggleFavorite={(event) => handleToggleFavorite(advertisement.id, event)}
      //     />
      //   ))}
      // </div> */
      // }