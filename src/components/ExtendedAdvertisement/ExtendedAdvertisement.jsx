import { Section } from './ExtendedAdvertisement.styled';
import {
  DateSVG,
  HeartSVG,
  InterSVG,
  MapSVG,
  MileSVG,
  NavSVG,
  PetrolSVG,
} from './ExtendedAdvertisementSVG';
import { useState } from 'react';

export const ExtendedAdvertisement = ({ advertisement }) => {
  const [showPhone, setShowPhone] = useState(true);
  console.log(advertisement);

  const changeShowPhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <>
      <Section>
        <div className="infoDIV">
          <div className="marg32">
            <div className="brandBox">
              <h2 className="brandTitle">{advertisement.car.brand}</h2>
              <h2 className="brandTitle">{advertisement.car.model}</h2>
              <h2 className="brandTitle">{advertisement.car.year}</h2>
              <button className="svg" type="button">
                <HeartSVG />
              </button>
            </div>
            <p className="brandTitle">{advertisement.car.price} $</p>
            <p className="publickDate">Опубліковано</p>
            <p className="region">{advertisement.region}</p>
            <div className="vinBox">
              <p className="vin">{advertisement.car.licensePlate}</p>
              <p className="vin">{advertisement.car.vin}</p>
            </div>
            <div className="textInfoBOx">
              <div className="textInfoBOxLeft">
                <p className="infoText">
                  <DateSVG />
                  {advertisement.car.year}
                </p>
                <p className="infoText">
                  <MapSVG />
                  {advertisement.region}
                </p>
                <p className="infoText">
                  <MileSVG />
                  {advertisement.car.mileage}
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
            <div>
              <h2 className="seller">
                Продавець:
                <span className="sellName">{advertisement.contactName}</span>
              </h2>
              {showPhone ? (
                <button
                  className="btnNumber"
                  type="button"
                  onClick={changeShowPhone}
                >
                  Показати номер
                </button>
              ) : (
                <button
                  className="number"
                  type="button"
                  onClick={changeShowPhone}
                >
                  {advertisement.contactPhone}
                </button>
              )}
            </div>
          </div>
          <div>
            <img
              className="imgCar"
              src={advertisement.previewImage}
              alt="Car "
            />
            <div className="carousel">
              {advertisement.images
                ? advertisement.images.map(image => {
                    return (
                      <img
                        key={image}
                        className="imgCarCarousel"
                        src={image}
                        alt="Car "
                      />
                    );
                  })
                : null}
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
                  <p className="leftText">Двигун</p>
                  <p className="leftText">Об'єм двигуна</p>
                  <p className="leftText"> Технічний стан</p>
                </div>
                <div className="gapDIV">
                  <p className="rightText">{advertisement.car.bodyType}</p>
                  <p className="rightText">{advertisement.car.engineType}</p>
                  <p className="rightText">{advertisement.car.engineVolume} л</p>
                  <p className="rightText">
                    {advertisement.car.technicalState}
                  </p>
                </div>
              </div>
              <div className="rightBox">
                <div className="gapDIV">
                  <p className="leftText">Пробіг</p>
                  <p className="leftText">Коробка передач</p>
                  <p className="leftText">Привід</p>
                  <p className="leftText">Колір</p>
                </div>
                <div className="gapDIV">
                  <p className="rightText">{advertisement.car.mileage}</p>
                  <p className="rightText">
                    {advertisement.car.transmissionType}
                  </p>
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
            <span className="sellName">{advertisement.contactName}</span>
          </h3>
          {showPhone ? (
            <button
              className="btnNumber"
              type="button"
              onClick={changeShowPhone}
            >
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
