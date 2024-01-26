import { ExtendedAdvertisement } from 'components/ExtendedAdvertisement/ExtendedAdvertisement';
import IMGModal from 'modal/imgModal/imgModal';
import Modal from 'modal/modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdverstisementsByID } from 'redux/advertisment/operations';
import { selectAdverstisementsID } from 'redux/advertisment/selectors';

export const AdvertisementByID = () => {
  const [imgSrs, setImgSrs] = useState()
  const dispatch = useDispatch();
  const id = useParams();
  const Advertisement = useSelector(selectAdverstisementsID);

  const setImage = (image) => {
  setImgSrs(image);
}

  useEffect(() => {
    dispatch(getAdverstisementsByID(id));
  }, [dispatch, id]);

  if (!Advertisement) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ExtendedAdvertisement advertisement={Advertisement} setImage={setImage} />
      <Modal>
        <IMGModal imgSrs={imgSrs} />
      </Modal>
    </>
  );
};
