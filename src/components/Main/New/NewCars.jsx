import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';
import { SectionCar } from '../Popular/Popular.styled';
import { heartSvg1 } from '../Popular/PopularSvg';


const NewCars = () => {
  const dispatch = useDispatch();
  const page = 1;
  const limit = 6;
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCarsThunk({ limit, page }));
  }, [dispatch]);

  return (
    
      <pagDiv>
        <SectionCar>
          <h2 className="carTitle">Нові оголошення</h2>
          <ul className="carList">
            {cars
              ? cars.map(car => {
                  const addressParts = car.address.split(',');
                  const City = addressParts[1] ? addressParts[1].trim() : '';
                  return (
                    <li className="carItem" key={car.id}>
                      <img className="imgCar" src={car.img} alt="Car view" />
                      <h3 className="blackTitle ">
                        {car.make} {car.model} {car.year}
                      </h3>
                      <ul className="carDescrList">
                        <li>
                          <p className="carDescrPrice">{car.rentalPrice}</p>
                        </li>
                        <li className="cityRight">
                          <p className="carDescrCity">{City}</p>
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
      <div></div>
      </pagDiv>
    
  );
};
export default NewCars;
