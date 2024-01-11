import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/operations';
import { SectionCar } from '../Popular/Popular.styled';
import { heartSvg1 } from '../Popular/PopularSvg';
import { PagDiv } from './NewCars.styled';
import { leftArrow, rightArrow } from './NewCarsSvg';
import { getAdverstisements } from 'redux/advertisment/operations';
import { selectAdverstisements } from 'redux/advertisment/selectors';
import carIMG from '../../../images/carIMG.jpg'

const NewCars = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const advertisements = useSelector(selectAdverstisements);
  

 const filteredAdvertisements = advertisements.filter(
   advertisement => advertisement.description !== ''
  );
  console.log(filteredAdvertisements);
  const limit = 6;
  const totalPages = 6;

  useEffect(() => {
    dispatch(getCarsThunk({ limit, page }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getAdverstisements());
  }, [dispatch]);

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
          {filteredAdvertisements
            ? filteredAdvertisements.map(car => {
                return (
                  <li className="carItem" key={car.id}>
                    
                      <img className="imgCar" src={carIMG} alt="Car " />
                    
                    <h3 className="blackTitle ">
                      {car.carDTO.carMark.carModel.name} {car.carDTO.carMark.name} {car.carDTO.yearToCreate}
                    </h3>
                    <ul className="carDescrList">
                      <li>
                        <p className="carDescrPrice">$ {car.price}</p>
                      </li>
                      <li className="cityRight">
                        <p className="carDescrCity">{car.region.city.name}</p>
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
          className={`pagination-button-arrow `}
          onClick={prevPage}
          disabled={page === 1}
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
          className={`pagination-button-arrow`}
          onClick={nextPage}
          disabled={page === totalPages}
        >
          {rightArrow}
        </button>
      </div>
    </PagDiv>
  );
};
export default NewCars;
