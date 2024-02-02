import { useSelector } from 'react-redux';
import { SearchListDiv } from './SearchList.styled';
import { CarSVG, DateSVG, Favorit, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from './SearchListSVG';
import { selectAdverstisements } from 'redux/advertisment/selectors';
// import { Arrow } from './SearchListSVG';

export const SearchList = ({ setSort }) => {
  const cars = useSelector(selectAdverstisements);


const handleSelectChange = event => {
  const selectedValue = event.target.value;

  if ( selectedValue === 'foData') {
    setSort('new');
  } else if (selectedValue === 'cheap') {
    setSort('cheap');
  } else if (selectedValue === 'expensive') {
    setSort('expensive');
  } 
};



  return (
    <SearchListDiv>
      <div>
        <div className="titleDiv">
          <h2 className="title">Результати пошуку (2):</h2>
          <select className="select" name="select" onChange={handleSelectChange} >
            <option value="foData">За датою додавання</option>
            <option value="cheap">Від дешевших</option>
            <option value="expensive">Від дорожчих</option>
          </select>
        </div>
        <div className="carsMainList">
          {cars && cars.length > 0  ? (
            <ul className='carsDiv'>
              {cars.map(car => {
                const desc = car.car;
                return (
                  <li key={car.id} className="carItem">
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
                        {desc.licensePlate &&<h3 className="number">{desc.licensePlate}</h3>}
                        {desc.vin && <h3 className="number">{desc.vin}</h3>}
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
            <h2 className='enotherONe'>Нічого не знайдено, виберіть другий фільтр</h2>
          )}
        </div>
      </div>
    </SearchListDiv>
  );
};
export default SearchList;
