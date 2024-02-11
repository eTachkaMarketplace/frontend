import { useDispatch } from 'react-redux';
import { Section } from './ExtendedAdvertisement.styled';
import {
  BlueMap,
  DateSVG,
  
  InterSVG,
  MapSVG,
  MileSVG,
  NavSVG,
  PetrolSVG,
  SearchLoop,
} from './ExtendedAdvertisementSVG';
import { useEffect, useRef, useState } from 'react';
import { setIsOpen } from 'redux/modal/modalSlice';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useNavigate } from 'react-router-dom';
import { Favorit } from '../SearchList/SearchListSVG';
import {  FavoritFilled } from '../HomePage/AdvertisementCardSVG';
// import { getAdvFav, postFavoriteAdverstisementsByID, deleteFavoriteAdverstisementsByID } from 'redux/advertisment/operations';


export const ExtendedAdvertisement = ({ advertisement, setImage, setSelectedImage, isFavorite, toggleFavorite}) => {
  const splideRef = useRef(null);
  const [smallImage, setSmallImage] = useState(null);

  const navigate = useNavigate();

  const [showPhone, setShowPhone] = useState(true);
  const dispatch = useDispatch();

  const monthsInUkrainian = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
  ];
  const dateString = advertisement.createdTimestamp;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = monthsInUkrainian[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const result = `${day} ${month} ${year}`;

  const changeShowPhone = () => {
    setShowPhone(!showPhone);
  };
  function formatMileage(number) {
    const isOverThousand = number >= 1000;

    if (isOverThousand) {
      const thousands = Math.floor(number / 1000);
      const remainder = number % 1000;
      const formattedRemainder = remainder ? ` ${remainder} ` : '';

      return `${thousands} тис.${formattedRemainder} км`;
    } else {
      return `${number} км`;
    }
  }

  const handlerSmallImage = image => {
    setSmallImage(image);
  };

  const setImageModal = images => {
    dispatch(setIsOpen(true));
    setImage(images);
  };
  useEffect(() => {
    setSelectedImage(smallImage);
  },[setSelectedImage, smallImage])

  useEffect(() => {
    // Initialize Splide.js
    const splide = new Splide('.splide', {
      rewind: true,
      fixedWidth: 140,
      fixedHeight: 100,
      // isNavigation: true,
      gap: 16,
      // focus: 'center',
      pagination: false,
      cover: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
    });

    // Set up the event listener for the 'active' event
    splide.on('active', () => {
      // Get the current active slide index
      const activeIndex = splide.index;

      // Update the smallImage with the corresponding image from advertisement.images
      if (advertisement.images && advertisement.images[activeIndex]) {
        setSmallImage(advertisement.images[activeIndex]);
      }
    });

    // Save the Splide instance in the ref for later use
    splideRef.current = splide;

    // Mount the Splide instance
    splide.mount();

    // Clean up the Splide instance on component unmount
    return () => {
      splide.destroy();
    };
  }, [advertisement]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <Section>
        <div className="infoDIV">
          <div className="marg32">
            <div>
              <div className="brandBox">
                <h2 className="brandTitle">{advertisement.car.brand}</h2>
                <h2 className="brandTitle">{advertisement.car.model}</h2>
                <h2 className="brandTitle">{advertisement.car.year}</h2>
                <button className="svg" type="button" onClick={toggleFavorite} >
                {isFavorite ? <FavoritFilled /> : <Favorit />}
                </button>
              </div>
              <p className="brandTitle">{advertisement.car.price.toLocaleString('uk-UA')} $</p>
              <p className="publickDate">Опубліковано {result}</p>
              <p className="region">
                <BlueMap /> {advertisement.region} область
              </p>
              <div className="vinBox">
                {advertisement.car.licensePlate && <p className="vin">{advertisement.car.licensePlate}</p>}
                {advertisement.car.vin && <p className="vin">{advertisement.car.vin}</p>}
              </div>
              <div className="textInfoBOx">
                <div className="textInfoBOxLeft">
                  <p className="infoText">
                    <DateSVG />
                    {advertisement.car.year}
                  </p>
                  <p className="infoText">
                    <MapSVG />
                    {advertisement.city}
                  </p>
                  <p className="infoText">
                    <MileSVG />
                    {advertisement.car.mileage.toLocaleString('uk-UA')}
                  </p>
                </div>
                <div className="textInfoBOxRight">
                  <p className="infoText">
                    <PetrolSVG />
                    {advertisement.car.engineType}
                  </p>
                  <p className="infoText">
                    <InterSVG />
                    {advertisement.car.transmissionType}
                  </p>
                  <p className="infoText">
                    <NavSVG />
                    {advertisement.car.driveType}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="sellerDIV">
                <h2 className="seller">
                  Продавець:
                  <span className="sellName"> {advertisement.contactName}</span>
                </h2>
                {showPhone ? (
                  <button className="btnNumber" type="button" onClick={changeShowPhone}>
                    Показати номер
                  </button>
                ) : (
                  <button className="number" type="button" onClick={changeShowPhone}>
                    {advertisement.contactPhone}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="photoDiv">
            <p className="id">№{advertisement.id}</p>
            <div className="loopDiv">
              <img className="imgCar" src={smallImage ? smallImage : advertisement.previewImage} alt="Car " />
              <button
                onClick={() => {
                  setImageModal(advertisement.images);
                }}
                type="button"
                className="loop"
              >
                <SearchLoop />
              </button>
            </div>
            <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {advertisement.images
                    ? advertisement.images.map(image => {
                        return (
                          <li className="splide__slide" key={image}>
                            <img
                              key={image}
                              onClick={() => {
                                handlerSmallImage(image);
                              }}
                              className="imgCarCarousel"
                              src={image}
                              alt="Car "
                            />
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="secondInfoBox">
          <div className="secondMargBox">
            <h2 className="secondTitle">Технічні характеристики</h2>
            <div className="secondBOXBOX">
              <div className="leftBox">
                <div className="gapDIV">
                  <p className="leftText">Тип кузова</p>
                  <p className="leftText">Тип двигуна</p>
                  <p className="leftText">Об'єм двигуна (л)</p>
                  <p className="leftText"> Технічний стан</p>
                </div>
                <div className="gapDIV">
                  <p className="rightText">{advertisement.car.bodyType}</p>
                  <p className="rightText">{advertisement.car.engineType}</p>
                  <p className="rightText">{advertisement.car.engineVolume} л</p>
                  <p className="rightText">{advertisement.car.technicalState}</p>
                </div>
              </div>
              <div className="rightBox">
                <div className="gapDIV">
                  <p className="leftText">Пробіг</p>
                  <p className="leftText">Коробка передач</p>
                  <p className="leftText">Тип приводу</p>
                  <p className="leftText">Колір</p>
                </div>
                <div className="gapDIV">
                  <p className="rightText">{formatMileage(advertisement.car.mileage)}</p>
                  <p className="rightText">{advertisement.car.transmissionType}</p>
                  <p className="rightText">{advertisement.car.driveType}</p>
                  <p className="rightText">{advertisement.car.color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {advertisement.description ? (
          <div className="descriptionBox">
            <div className="padingBox">
              <h3 className="thirdTitle">Опис</h3>
              <p className="thirdText">{advertisement.description}</p>
            </div>
          </div>
        ) : null}
        <div className="numberDiv">
          <h3 className="sellerBottom">
            Зв'язатись з продавцем:
            <span className="sellName"> {advertisement.contactName}</span>
          </h3>
          {showPhone ? (
            <button className="btnNumber" type="button" onClick={changeShowPhone}>
              Показати номер
            </button>
          ) : (
            <button className="number" type="button" onClick={changeShowPhone}>
              {advertisement.contactPhone}
            </button>
          )}
        </div>
      </Section>
    </>
  );
};
