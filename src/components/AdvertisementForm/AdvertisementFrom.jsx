import { DropArrow } from 'components/SearchForm/SearchFormSVG';
import { Field, Form, Formik } from 'formik';
import {
  Paragraph,
  RequiredMarker,
  SectionContainer,
  SectionTitle,
  StyledArrowSVG,
  StyledCreateSVG,
  StyledPostSVG,
} from 'pages/AdvertisementPage/AdvertisementPage.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import { selectToken } from 'redux/auth/selectors';
import { setIsOpen } from 'redux/modal/modalSlice';

const brandsAndModels = {
  BMW: ['X5', 'M3', 'X3'],
  Toyota: ['Camry', 'Corolla', 'Avalon'],
  'Mercedes-Benz': ['A-Class', 'B-Class', 'C-Class'],
};

const regionsAndCities = {
  Київська: ['Київ', 'Біла-церква', 'Бровари', 'Ірпінь'],
  Вінницька: ['Вінниця', 'Хмельницький', 'Бар'],
  Волинська: ['Луцьк', 'Ковель', 'Нововолинь'],
  Дніпропетровська: ['Дніпро', 'Кривий Ріг', 'Нікополь'],
  Донецька: ['Донецьк', 'Маріуполь', 'Макіївка'],
  Житомирська: ['Житомир', 'Коростень', 'Бердичів'],
  Закарпатська: ['Ужгород', 'Мукачево', 'Хуст'],
  Запорізька: ['Запоріжжя', 'Мелітополь', 'Бердянськ'],
  'Івано-Франківська': ['Івано-Франківськ', 'Яремче', 'Коломия'],
  Кіровоградська: ['Кропивницький', 'Світловодськ', 'Олександрія'],
  Луганська: ['Луганськ', 'Алчевськ', 'Северодонецьк'],
  Львівська: ['Львів', 'Дрогобич', 'Трускавець'],
  Миколаївська: ['Миколіїв', 'Первомайськ', 'Вознесенськ'],
  Одеська: ['Одеса', 'Чорноморськ', 'Ізмаїл'],
  Полтавська: ['Полтава', 'Кременчук', 'Миргород'],
  Рівенська: ['Рівне', 'Костопіль', 'Дубно'],
  Сумська: ['Суми', 'Конотоп', 'Шостка'],
  Тернопільська: ['Тернопіль', 'Чортків', 'Бережани'],
  Черкаська: ['Черкаси', 'Сміла', 'Золотоноші'],
  Чернівецька: ['Чернівці', 'Вашківці', 'Хотин'],
  Чернігівська: ['Чернігів', 'Ніжин', 'Прилуки'],
  Харківська: ['Харків', 'Ізюм', 'Балаклея'],
  Херсонська: ['Херсон', 'Нова Каховка', 'Скадовськ'],
  Хмельницька: ['Хмельницький', 'Камʼянець-Подільський', 'Шепетівка'],
};

export const AdvertisementForm = ({ initialValues }) => {
  const dispatch = useDispatch();
  const formikRef = useRef(null);

  const [availableModels, setAvailableModels] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const token = useSelector(selectToken);

  const handleFileChange = event => {
    const files = event.currentTarget.files;
    formikRef.current.setFieldValue('images', files);
  };

  const onSubmit = async values => {
    try {
      console.log('values', values);

      const formData = new FormData();
        for (let i = 0; i < values.images.length; i++) {
          formData.append('images', values.images[i]);
        }
      formData.append(
        'payload',
        new Blob([JSON.stringify(values.advertisementDTO)], {type: "application/json"})
      );
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      await dispatch(createFavoriteAdverstisementsByID({ formData, token }));

      console.log('adverse created');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm({ values: initialValues });
    }
  }, [initialValues]);

  const openModal = () => {
    dispatch(setIsOpen(true));
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm({ values: initialValues });
    }
  }, [initialValues]);

  const handleBrandChange = event => {
    const selectedBrand = event.target.value;

    const models = brandsAndModels[selectedBrand] || [];

    setAvailableModels(models);

    formikRef.current.setFieldValue('advertisementDTO.carDTO.carMark.name', '');
    formikRef.current.setFieldValue(
      'advertisementDTO.carDTO.carMark.name',
      selectedBrand
    );
  };

  const handleRegionChange = e => {
    const regionValue = e.target.value;
    setSelectedRegion(regionValue);
    setSelectedCity('');
    formikRef.current.setFieldValue(
      'advertisementDTO.region.name',
      regionValue
    );
  };

  const handleCityChange = e => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue);
    formikRef.current.setFieldValue(
      'advertisementDTO.region.city.name',
      cityValue
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        onSubmit(values);
      }}
      innerRef={formik => (formikRef.current = formik)}
    >
      <Form className="form">
        <button className="clearButton" onClick={openModal} type="button">
          Очистити все
        </button>
        <SectionContainer>
          <SectionTitle>Етапи розміщення оголошення</SectionTitle>
          <div className="styled">
            <StyledArrowSVG />
            <div className="create">
              <StyledCreateSVG />
              <p className="create_text">1. Створення</p>
            </div>
            <div className="post">
              <StyledPostSVG />
              <p className="post_text">2. Публікація</p>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>
            Фото автомобілю<RequiredMarker>*</RequiredMarker>
          </SectionTitle>
          <Paragraph>
            Перше фото є головним. Максимальний розмір фотографії до 5 МБ.
            Формат фотографії: JPG, PNG. Мінімальна кількість фотографій - 6.
          </Paragraph>
          <div>
            <input
              type="file"
              name="images"
              className="profile-input"
              multiple
              onChange={handleFileChange}
            />
          </div>
        </SectionContainer>
        ;
        <SectionContainer>
          <SectionTitle>Основна інформація</SectionTitle>

          <label>
            <div className="containerLong">
              Категорія<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.description"
              >
                <option value="">Оберіть</option>
                <option value="New">Нові</option>
                <option value="Used">Вживані</option>
                <option value="Servitude">Під пригон</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Марка авто<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.carMark.name"
                onChange={handleBrandChange}
              >
                <option value="">Оберіть</option>
                {Object.keys(brandsAndModels).map(brand => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Модель авто <RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.carMark.carModel.name"
              >
                <option value="">Оберіть</option>
                {availableModels.map(model => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">Номерний знак</div>
            <Field
              className="fieldTextLong marg16"
              type="text"
              name="advertisementDTO.carDTO.carNumber"
              placeholder="АК 9245 АК"
            ></Field>
          </label>

          <label>
            <div className="containerLong">
              Область<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <select
                className="fieldLong marg16"
                name="advertisementDTO.region.name"
                onChange={handleRegionChange}
                value={selectedRegion}
              >
                <option value="">Оберіть</option>
                {Object.keys(regionsAndCities).map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Місто<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <select
                className="fieldLong marg16"
                name="advertisementDTO.region.city.name"
                onChange={handleCityChange}
                value={selectedCity}
              >
                <option value="">Оберіть</option>
                {regionsAndCities[selectedRegion] &&
                  regionsAndCities[selectedRegion].map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Пробіг<span className="transparent"> (тис. км)</span>
              <RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.mileage"
              >
                <option value="">Оберіть</option>
                <option value={10000}>10</option>
                <option value={20000}>20</option>
                <option value={30000}>30</option>
                <option value={40000}>40</option>
                <option value={50000}>50</option>
                <option value={60000}>60</option>
                <option value={70000}>70</option>
                <option value={80000}>80</option>
                <option value={90000}>90</option>
                <option value={100000}>100</option>
                <option value={125000}>125</option>
                <option value={150000}>150</option>
                <option value={200000}>200</option>
                <option value={250000}>250</option>
                <option value={300000}>300</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Рік випуску<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldShort marg16"
                as="select"
                name="advertisementDTO.carDTO.yearToCreate"
              >
                <option value="">Оберіть</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Ціна<span className="transparent"> ($)</span>
              <RequiredMarker>*</RequiredMarker>
            </div>
            <Field
              className="fieldTextShort"
              type="number"
              name="advertisementDTO.price"
              placeholder="1000 $"
            ></Field>
          </label>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>Технічні характеристики</SectionTitle>

          <label>
            <div className="containerLong">
              Тип кузова<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.bodyType.name"
              >
                <option value="">Оберіть</option>
                <option value="Універсал">Універсал</option>
                <option value="Седан">Седан</option>
                <option value="Кабріолет">Кабріолет</option>
                <option value="Купе">Купе</option>
                <option value="Позашляховик">Внедорожник</option>
                <option value="Хетчбек">Хетчбек</option>
                <option value="Пікап">Пікап</option>
                <option value="Лімузин">Лімузин</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Двигун<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.engine.name"
              >
                <option value="">Оберіть</option>
                <option value="Electro">Електрична силова установка</option>
                <option value="Hibrid">Гібрід</option>
                <option value="Gasoline">Бензиновий</option>
                <option value="Gaseous">Газовий</option>
                <option value="Diesel">Дизельний</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Об‘єм двигуна<span className="transparent"> (л)</span>
              <RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.engine.volume"
              >
                <option value="">Оберіть</option>
                <option value="Microliter">До 1,1</option>
                <option value="Low-volume">Від 1,2 до 1,7</option>
                <option value="Medium-sized">Від 1,8 до 3,3</option>
                <option value="Large-capacity">Від 3,5</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Привід<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.driveType.name"
              >
                <option value="">Оберіть</option>
                <option value="Front">Передній</option>
                <option value="Posterior">Задній</option>
                <option value="Full">Повний</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Коробка передач<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.transmission.name"
              >
                <option value="">Оберіть</option>
                <option value="Mechanical">Механічна</option>
                <option value="Automatic">Автоматична</option>
                <option value="Robotic">Роботизована</option>
                <option value="Variable">Варіативна</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Технічний стан<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.technicalState.name"
              >
                <option value="">Оберіть</option>
                <option value="Completely intact">Повністю непошкоджене</option>
                <option value="Professionally repaired damage">
                  Професійно відремонтовані пошкодження
                </option>
                <option value="Unrepaired damage">
                  Не відремонтовані пошкодження
                </option>
                <option value="Not running/For spare parts">
                  Не на ходу/На запчастини
                </option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">
              Колір<RequiredMarker>*</RequiredMarker>
            </div>
            <div className="arrowDiv">
              <Field
                className="fieldLong marg16"
                as="select"
                name="advertisementDTO.carDTO.color.name"
              >
                <option value="">Оберіть</option>
                <option value="White">Білий</option>
                <option value="Black">Чорний</option>
                <option value="Gray">Сірий</option>
                <option value="Red">Червоний</option>
                <option value="Blue">Синій</option>
                <option value="Pink">Рожевий</option>
                <option value="Green">Зелений</option>
                <option value="Orange">Помаранчовий</option>
                <option value="Burgundy">Бордовий</option>
                <option value="Brown">Коричневий</option>
                <option value="Yellow">Жовтий</option>
                <option value="Violet">Фіолетовий</option>
                <option value="Gold">Золотий</option>
                <option value="Silver">Срібний</option>
                <option value="beige">бежевий</option>
                <option value="Multicolor">Мультиколір</option>
              </Field>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </label>

          <label>
            <div className="containerLong">VIN код</div>
            <Field
              className="fieldTextLong"
              type="text"
              name="advertisementDTO.carDTO.vinNumber"
              placeholder="VF7LCRFJF74251989"
            ></Field>
          </label>
        </SectionContainer>
        {/* <SectionContainer>
          <SectionTitle>Опис</SectionTitle>
          <Paragraph>
            Детально опишіть особливості вашого автомобілю або вкажіть додаткові
            паратметри (наприклад: круіз контроль, парктронік і т.д.)
          </Paragraph>
          <label>
            <Field
              className="fieldInput marg16"
              as="textarea"
              name="description"
            ></Field>
          </label>
        </SectionContainer> */}
        <SectionContainer>
          <SectionTitle>Контактні данні</SectionTitle>
          <label>
            <div className="containerLong">
              Ваше ім’я<RequiredMarker>*</RequiredMarker>
            </div>
            <Field
              className="fieldLong marg16"
              type="text"
              name="advertisementDTO.ownerName"
              placeholder="Сергій"
            ></Field>
          </label>
          <label>
            <div className="containerLong">
              Телефон<RequiredMarker>*</RequiredMarker>
            </div>
            <Field
              className="fieldLong marg16"
              type="text"
              name="advertisementDTO.ownerPhone"
              placeholder="+38(0ХХ) ХХХ ХХ ХХ"
            ></Field>
          </label>
        </SectionContainer>
        <div className="buttonContainer">
          <button className="chekAnnouncementButton" type="button">
            Переглянути оголошення
          </button>
          <button className="submitButton" type="submit">
            Опублікувати оголошення
          </button>
        </div>
      </Form>
    </Formik>
  );
};
