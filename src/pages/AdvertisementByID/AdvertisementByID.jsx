import { ExtendedAdvertisement } from "components/ExtendedAdvertisement/ExtendedAdvertisement"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAdverstisementsByID } from "redux/advertisment/operations"
import { selectAdverstisementsID } from "redux/advertisment/selectors"

export const AdvertisementByID = () => {
  const dispatch = useDispatch();
  const id = useParams();
const Advertisement = useSelector(selectAdverstisementsID); // Припустимо, що дані містяться в полі advertisement

  useEffect(() => {
    dispatch(getAdverstisementsByID(id));
  }, [dispatch, id]);

    
  if (!Advertisement) {
    return <p>Loading...</p>; 
  }

  return <ExtendedAdvertisement advertisement={Advertisement} />;
};