import {
  BigPlus,
  CarSVG,
  DateSVG,
  LockSVG,
  PenSvg,
  PetrolSVG,
  SlideSVG,
  SpeedometerSVG,
} from 'components/SearchList/SearchListSVG';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAdv } from 'redux/advertisment/operations';
import { selectMyADV } from 'redux/advertisment/selectors';
import { Wraper } from './UserAnnouncement.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import DisableModal from './modals/Disable';
import DelitedModal from './modals/Delited';
import ActivateModal from './modals/Activate';
import { Link, NavLink } from 'react-router-dom';

const ToggleContent = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

const UserAnnouncement = ({ setModalContent }) => {
  const dispatch = useDispatch();
  const myADV = useSelector(selectMyADV);
  const [activeTab, setActiveTab] = useState('active');
  const [active, setActive] = useState([]);
  const [unactive, setUnactive] = useState([]);
  const [dropdownState, setDropdownState] = useState({});

  useEffect(() => {
    dispatch(getMyAdv());
  }, [dispatch]);

  const refreshMyAdv = () => {
    dispatch(getMyAdv());
  };

  useEffect(() => {
    const activeAdvs = myADV.filter(adv => adv.active);
    const unactiveAdvs = myADV.filter(adv => !adv.active);

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
    setTimeout(() => {
      setDropdownState(prevState => ({
        ...prevState,
        [itemId]: false,
      }));
    }, 5000);
  };

  const openModal = content => {
    setModalContent(content);
    dispatch(setIsOpen(true));
  };

  return (
    <>
      <Wraper>
        <div className="activeDIV">
          <button type='button'
            className={`activeBTN ${activeTab === 'active' ? 'activeClass' : ''}`}
            onClick={() => handleTabChange('active')}
          >
            Активні
          </button>
          <button type='button'
            className={`activeBTN ${activeTab === 'inactive' ? 'activeClass' : ''}`}
            onClick={() => handleTabChange('inactive')}
          >
            Неактивні
          </button>
        </div>

        <ToggleContent isActive={activeTab === 'active'}>
          <ul className="carsDiv">
            {active.map(car => {
              const desc = car.car;
              const itemId = car.id;
              return (
                <li key={car.id} className="carItem">
                  <div>
                    <img className="img" src={car.previewImage} alt="car" />
                  </div>
                  <div className="infoDiv">
                    <div className="modelInfoDIV">
                      <Link to={`/AdvertisementByID/${itemId}`}>
                        <h2 className="modelInfo">
                          {desc.brand} {desc.model} {desc.year}
                        </h2>
                      </Link>
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
                      <Link to={`/editAdvertisement/${itemId}`} className="dropBTN">Редагувати</Link>
                      <button
                        className="dropBTN"
                        type="button"
                        onClick={() => {
                          openModal(<DisableModal refreshMyAdv={refreshMyAdv} id={itemId} />);
                        }}
                      >
                        Деактивувати
                      </button>
                      <button
                        className="dropBTN"
                        type="button"
                        onClick={() => {
                          openModal(<DelitedModal refreshMyAdv={refreshMyAdv} id={itemId} />);
                        }}
                      >
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
          <NavLink className="link" to="/advertisementPage">
            <BigPlus />
          </NavLink>
        </ToggleContent>

        <ToggleContent isActive={activeTab === 'inactive'}>
          <ul className="carsDiv">
            {unactive.map(car => {
              const desc = car.car;
              const itemId = car.id;
              return (
                <li key={car.id} className="carItem">
                  <div>
                    <img className="img" src={car.previewImage} alt="car" />
                  </div>
                  <div className="infoDiv">
                    <div className="modelInfoDIV">
                      <Link to={`/AdvertisementByID/${itemId}`}>
                        <h2 className="modelInfo">
                          {desc.brand} {desc.model} {desc.year}
                        </h2>
                      </Link>
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
                    <Link to={`/editAdvertisement/${itemId}`} className="dropBTN">Редагувати</Link>
                      <button
                        className="dropBTN"
                        type="button"
                        onClick={() => {
                          openModal(<ActivateModal refreshMyAdv={refreshMyAdv} id={itemId} />);
                        }}
                      >
                        Активувати
                      </button>
                      <button
                        className="dropBTN"
                        type="button"
                        onClick={() => {
                          openModal(<DelitedModal refreshMyAdv={refreshMyAdv} id={itemId} />);
                        }}
                      >
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
          <NavLink className="link" to="/advertisementPage">
            <BigPlus />
          </NavLink>
        </ToggleContent>
      </Wraper>
    </>
  );
};

export default UserAnnouncement;
