import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Title, RequiredMarker, Paragraph } from '../AdvertisementPage/AdvertisementPage.styled.jsx';
import { getAdverstisementsByID, putFavoriteAdverstisementsByID } from '../../redux/advertisment/operations.js'; 
import { EditAdvertisementForm } from 'components/AdvertisementForm/EditAdvertisementForm.jsx';

const EditAdvertisementPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const advertisement = useSelector(state => state.adverstisement.adverstisementsID);

  useEffect(() => {
    dispatch(getAdverstisementsByID({ id }));
  }, [dispatch, id]);

  const handleSubmit = (updatedAdvertisement) => {
    dispatch(putFavoriteAdverstisementsByID({ Adverstisements: updatedAdvertisement, id }));
  };

  return (
    <Container>
      <Title>Редагувати оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      {advertisement && <EditAdvertisementForm formInitialValues={advertisement} onSubmit={handleSubmit} />
      }
    </Container>
  );
};

export default EditAdvertisementPage;
