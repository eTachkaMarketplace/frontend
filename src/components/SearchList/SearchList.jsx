import { useSelector } from 'react-redux';
import { SearchListDiv } from './SearchList.styled';
import { CarSVG, DateSVG, Favorit, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from './SearchListSVG';
import { selectAdverstisements } from 'redux/advertisment/selectors';
// import { Arrow } from './SearchListSVG';

export const SearchList = () => {
  const cars = useSelector(selectAdverstisements);

  return (
    <SearchListDiv>
      <div>
        <div className="titleDiv">
          <h2 className="title">Результати пошуку (2):</h2>
          <select className="select" name="select">
            <option value="foData">За датою додавання</option>
            <option value="cheap">Від дешевших</option>
            <option value="expensive">Від дорожчих</option>
          </select>
        </div>
        <div className="carsMainList">
          {cars ? (
            <ul>
              {cars.map(car => {
                const desc = car.car
                return (
                  <li className="carItem">
                    <div>
                      <img className="img" src={car.previewImage} alt="car" />
                    </div>
                    <div className="infoDiv">
                      <div className="modelInfoDIV">
                        <h2 className="modelInfo">
                          {desc.brand} {desc.model} {desc.year}
                        </h2>
                        <h2 className="modelInfo">{desc.price}$</h2>
                      </div>
                      <div className="numberDiv">
                        <h3 className="number">{desc.licensePlate}</h3>
                        <h3 className="number">{desc.vin}</h3>
                      </div>
                      <div className="listDIV">
                        <ul className="list">
                          <li className="itemLI">
                            <DateSVG />
                            {desc.year}
                          </li>
                          <li className="itemLI">
                            <LockSVG />
                            {car.region}
                          </li>
                          <li className="itemLI">
                            <SpeedometerSVG />
                            {desc.mileage}
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="itemLI">
                            <PetrolSVG />
                            {desc.engineType}
                          </li>
                          <li className="itemLI">
                            <SlideSVG />
                            {desc.driveType}
                          </li>
                          <li className="itemLI">
                            <CarSVG />
                            {desc.transmissionType}
                          </li>
                        </ul>
                      </div>
                      <button className="favoriteBTN" type="button">
                        <Favorit />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h2>Виберіть другі фільтри</h2>
          )}
        </div>
      </div>
    </SearchListDiv>
  );
};
export default SearchList;
