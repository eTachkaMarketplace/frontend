import { CarSVG, DateSVG, Favorit, LockSVG, PenSvg, PetrolSVG, SlideSVG, SpeedometerSVG } from 'components/SearchList/SearchListSVG';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAdv } from 'redux/advertisment/operations';
import { selectMyADV } from 'redux/advertisment/selectors';
import { Wraper } from './UserAnnouncement.styled';

const ToggleContent = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

const UserAnnouncement = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('active');
  const myADV = useSelector(selectMyADV);
  const [active, setActive] = useState([]);
  const [unactive, setUnactive] = useState([]);
    const [dropdownState, setDropdownState] = useState({});

  console.log(myADV);

  useEffect(() => {
    dispatch(getMyAdv());
  }, [dispatch]);

  useEffect(() => {
    const activeAdvs = myADV.filter(adv => adv.isActive);
    const unactiveAdvs = myADV.filter(adv => !adv.isActive);

    setActive(activeAdvs);
    setUnactive(unactiveAdvs);
  }, [myADV]);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  
  const toggleDropdown = itemId => {
    setDropdownState(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };


  return (
    <Wraper>
      <div className="activeDIV">
        <p
          className={`activeBTN ${activeTab === 'active' ? 'activeClass' : ''}`}
          onClick={() => handleTabChange('active')}
        >
          Активні
        </p>
        <p
          className={`activeBTN ${activeTab === 'inactive' ? 'activeClass' : ''}`}
          onClick={() => handleTabChange('inactive')}
        >
          Неактивні
        </p>
      </div>

      <ToggleContent isActive={activeTab === 'active'}>
        <ul className="carsDiv">
          {myADV.map(car => {
            const desc = car.car;
            const itemId = car.id;
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
                    {desc.licensePlate && <h3 className="number">{desc.licensePlate}</h3>}
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
                  <div className="dropBox" style={{ display: dropdownState[itemId] ? 'flex' : 'none' }}>
                    <button className="dropBTN" type="button">
                      Редагувати
                    </button>
                    <button className="dropBTN" type="button">
                      Деактивувати
                    </button>
                    <button className="dropBTN" type="button">
                      Видалити
                    </button>
                  </div>
                  <button className="favoriteBTN" type="button" onClick={() => toggleDropdown(itemId)}>
                    <PenSvg />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </ToggleContent>

      <ToggleContent isActive={activeTab === 'inactive'}>
        <p>Неактивні</p>
      </ToggleContent>
    </Wraper>
  );
};

export default UserAnnouncement;
