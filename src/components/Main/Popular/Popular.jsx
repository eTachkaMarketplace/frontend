import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SectionCar } from './Popular.styled';
import { heartSvg1 } from './PopularSvg';
import { getCarsThunkPopular } from 'redux/cars/operations';
import { selectAdverstisements } from 'redux/advertisment/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = 1;
  const limit = 3;

  const advertisements = useSelector(selectAdverstisements);
  const filteredAdvertisements = advertisements.filter(
    advertisement => advertisement.description !== ''
  );
const firstThreeAdvertisements = filteredAdvertisements.slice(0, 3);
  useEffect(() => {
    dispatch(getCarsThunkPopular({ limit, page }));
  }, [dispatch, limit, page]);

  return (
    <SectionCar>
      <h2 className="carTitle">Популярні</h2>
      <ul className="carList">
        {firstThreeAdvertisements
          ? firstThreeAdvertisements.map(ad => {
            let car = ad.car;
              return (
                <li className="carItem" key={car.id}>
                  <img className="imgCar" src={ad.previewImage} alt="Car " />

                  <h3 className="blackTitle ">
                    {car.brand} {car.model}{' '}
                    {car.year}
                  </h3>
                  <ul className="carDescrList">
                    <li>
                      <p className="carDescrPrice">$ {car.price}</p>
                    </li>
                    <li className="cityRight">
                      <p className="carDescrCity">{car.region}</p>
                    </li>
                  </ul>

                  <button
                    // onClick={() => {
                    //   if (isCarInFav(car.id)) {
                    //     removeFromFav(car.id);
                    //   } else {
                    //     addFavorite(car.id);
                    //   }
                    // }}
                    className="svg"
                    type="button"
                  >
                    {heartSvg1}
                    {/* {isCarInFav(car.id) ? heartSvg2 : heartSvg1}  */}
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
