import { SearchListDiv } from './SearchList.styled';
import { CarSVG, DateSVG, Favorit, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from './SearchListSVG';
// import { Arrow } from './SearchListSVG';

export const SearchList = () => {
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
        <div className='carsMainList'>
          <ul>
            <li className="carItem">
              <div>
                <img
                  className="img"
                  src="https://i.imgur.com/nJhybxm.jpg"
                  alt="car"
                />
              </div>
              <div className="infoDiv">
                <div className="modelInfoDIV">
                  <h2 className="modelInfo">BMW X5 2019</h2>
                  <h2 className="modelInfo">64 244$</h2>
                </div>
                <div className="numberDiv">
                  <h3 className='number'>KA2020HM</h3>
                  <h3 className='number'>МІ202067688585855994949</h3>
                </div>
                <div className="listDIV">
                  <ul>
                    <li className="itemLI">
                      <DateSVG />
                      2012
                    </li>
                    <li className="itemLI">
                      <LockSVG />
                      Київ
                    </li>
                    <li className="itemLI">
                      <SpeedometerSVG />
                      150 000
                    </li>
                  </ul>
                  <ul>
                    <li className="itemLI">
                      <PetrolSVG />
                      Бензин
                    </li>
                    <li className="itemLI">
                      <SlideSVG />
                      Автомат
                    </li>
                    <li className="itemLI">
                      <CarSVG />
                      Задній
                    </li>
                  </ul>
                </div>
                <button className="favoriteBTN" type="button">
                  <Favorit />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SearchListDiv>
  );
};
export default SearchList;
