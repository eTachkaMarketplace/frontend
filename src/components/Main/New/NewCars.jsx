import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';
import { SectionCar } from '../Popular/Popular.styled';
import { heartSvg1 } from '../Popular/PopularSvg';
import { PagDiv } from './NewCars.styled';
import { leftArrow, rightArrow } from './NewCarsSvg';

const NewCars = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);

  const limit = 6;
  const totalPages = 6;

  useEffect(() => {
    dispatch(getCarsThunk({ limit, page }));
  }, [dispatch, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  const visiblePages = Array.from(
    { length: 5 },
    (_, index) => endPage - 4 + index
  ).filter(num => num > 0 && num <= totalPages);

  return (
    <PagDiv>
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
      <div className="paginDiv">
        <button
          className={`pagination-button ${page === 1 ? 'hidden' : ''}`}
          onClick={prevPage}
        >
          {leftArrow}
        </button>
        {visiblePages.map(pageNum => (
          <button
            key={pageNum}
            className={`pagination-button ${page === pageNum ? 'active' : ''}`}
            onClick={() => setPage(pageNum)}
          >
            {pageNum}
          </button>
        ))}
        <button
          className={`pagination-button ${page === totalPages ? 'hidden' : ''}`}
          onClick={nextPage}
        >
          {rightArrow}
        </button>
      </div>
    </PagDiv>
  );
};
export default NewCars;
