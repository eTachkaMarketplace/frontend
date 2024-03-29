import { ExtendedAdvertisement } from 'components/ExtendedAdvertisement/ExtendedAdvertisement';
import IMGModal from 'modal/imgModal/imgModal';
import Modal from 'modal/modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getAdverstisementsByID,
  getAdvFav,
  postFavoriteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
} from 'redux/advertisment/operations';
import { selectAdverstisementsID, selectErrorGetId } from 'redux/advertisment/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AdvertisementByID = ({ favorites, setFavorites }) => {
  const [imgSrs, setImgSrs] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();
  const id = useParams();
  const Advertisement = useSelector(selectAdverstisementsID);
  const LogedIn = useSelector(selectIsLoggedIn);
  const ErrorGetId = useSelector(selectErrorGetId);
  
  const navigate = useNavigate();

  const setImage = image => {
    setImgSrs(image);
  };

  useEffect(() => {
    dispatch(getAdverstisementsByID(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

  useEffect(() => {
    if (ErrorGetId) {
      navigate('/*');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ErrorGetId]);

  const handleToggleFavorite = (id, event) => {
    if (!LogedIn) {
      navigate('/authorization');
      return;
    }
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

  if (!Advertisement) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ExtendedAdvertisement
        advertisement={Advertisement}
        setImage={setImage}
        setSelectedImage={setSelectedImage}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavorite={event => handleToggleFavorite(Advertisement.id, event)}
        isFavorite={favorites.includes(Advertisement.id)}
      />
      <Modal>
        <IMGModal imgSrs={imgSrs} selectedImage={selectedImage} />
      </Modal>
    </>
  );
};
