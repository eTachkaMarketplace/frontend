import { useDispatch, useSelector } from 'react-redux';
import { selectAdverstisements } from '../../redux/advertisment/selectors';
import { useEffect } from 'react';
import { getAdverstisements } from '../../redux/advertisment/operations';
import AdvertisementSection from './AdvertisementSection';
import AdvertisementCard from './AdvertisementCard';
import { getAdvFav } from 'redux/advertisment/operations';
import {
  postFavoriteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
} from 'redux/advertisment/operations';



export default function PopularCatalog({ favorites, setFavorites }) {
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements).slice(0, 3);

  useEffect(() => {
    dispatch(getAdverstisements({ size: 3, page: 0 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

  const handleToggleFavorite = (id, event) => {
    event.stopPropagation(); 
    if (Array.isArray(favorites)) {
      if (favorites.includes(id)) {
        dispatch(deleteFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => prevFavorites.filter(favoriteId => favoriteId !== id)))
          .catch(error => console.error('Failed to remove advertisement from favorites', error));
      } else {
        dispatch(postFavoriteAdverstisementsByID({ id }))
          .then(() => setFavorites(prevFavorites => [...prevFavorites, id]))
          .catch(error => console.error('Failed to add advertisement to favorites', error));
      }
    } else {
      dispatch(postFavoriteAdverstisementsByID({ id }))
        .then(() => setFavorites([...favorites, id]))
        .catch(error => console.error('Failed to add advertisement to favorites', error));
    }
  };

  return (
    <AdvertisementSection name={'Популярні'}>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {advertisements.map((advertisement, index) => (
          <AdvertisementCard
            key={advertisement.id}
            data={advertisement}
            isFavorite={favorites.includes(advertisement.id)}
            toggleFavorite={(event) => handleToggleFavorite(advertisement.id, event)}
          />
        ))}
      </div>
    </AdvertisementSection>
  );
}
