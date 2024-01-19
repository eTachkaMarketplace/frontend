import { DropArrow } from 'components/SearchForm/SearchFormSVG';
import { NavLink, redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ImageUploadComponent from './imgUpload';
import { Paragraph, RequiredMarker } from 'pages/AdvertisementPage/AdvertisementPage.styled';
import {
  SectionContainer,
  SectionTitle,
  Form,
  Field,
  ErrorMessage,
  StyledArrowSVG,
  StyledCreateSVG,
  StyledPostSVG,
} from './AdvertisementForm.styled';
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

const userSchema = Yup.object().shape({
  car: Yup.object().shape({
    licensePlate: Yup.string().required('це поле обов`язкове для заповнення').max(10, 'Номер до 10 символів'),
    brand: Yup.string().required('це поле обов`язкове для заповнення'),
    model: Yup.string().required('це поле обов`язкове для заповнення'),
    mileage: Yup.number().required("це поле обов`язкове для заповнення").positive("Введіть додатне число"),
    year: Yup.number().required('це поле обов`язкове для заповнення').min(1999, 'Виберіть рік'),
    price:Yup.number().required("це поле обов`язкове для заповнення").positive("Введіть додатне число"),
    bodyType: Yup.string().required('це поле обов`язкове для заповнення'),
    engineType: Yup.string().required('це поле обов`язкове для заповнення'),
    engineVolume: Yup.number().required("це поле обов`язкове для заповнення").positive("Введіть додатне число"),
    driveType: Yup.string().required('це поле обов`язкове для заповнення'),
    transmissionType: Yup.string().required('це поле обов`язкове для заповнення'),
    technicalState: Yup.string().required('це поле обов`язкове для заповнення'),
    color: Yup.string().required('це поле обов`язкове для заповнення'),
    vin: Yup.string().required('це поле обов`язкове для заповнення').max(10, 'Номер до 10 символів'),

  }),
  category: Yup.string().required('це поле обов`язкове для заповнення'),
  region: Yup.string().required('це поле обов`язкове для заповнення'),
  contactName: Yup.string().required('це поле обов`язкове для заповнення'),
  contactPhone: Yup.number().required('це поле обов`язкове для заповнення'),
  description: Yup.string().required('це поле обов`язкове для заповнення'),
  
});

export const AdvertisementForm = ({ initialValues }) => {
  const dispatch = useDispatch();
  const formikRef = useRef(null);

  const [availableModels, setAvailableModels] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');
  const token = useSelector(selectToken);
  const [formImages, setFormImages] = useState([]);

  const handleImagesChange = newImages => {
    setFormImages(newImages);
    console.log(formImages);
  };

  const onSubmit = async values => {
    try {
      console.log('values', values);
      values.car.year = Number(values.car.year);

      const formData = new FormData();
      formImages.forEach((image, index) => {
        formData.append(`images`, image);
      });
      
      formData.append('payload', new Blob([JSON.stringify(values)], { type: 'application/json' }));
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      dispatch(createFavoriteAdverstisementsByID({ formData, token }));

      console.log('adverse created');
      redirect('/advertisementDone');
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

    formikRef.current.setFieldValue('car.brand', '');
    formikRef.current.setFieldValue('car.brand', selectedBrand);
  };

  const handleRegionChange = e => {
    const regionValue = e.target.value;
    setSelectedRegion(regionValue);
    // setSelectedCity('');
    formikRef.current.setFieldValue('region', regionValue);
  };

  // const handleCityChange = e => {
  //   const cityValue = e.target.value;
  //   setSelectedCity(cityValue);
  //   formikRef.current.setFieldValue(
  //     'advertisementDTO.region.city.name',
  //     cityValue
  //   );
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
      innerRef={formik => (formikRef.current = formik)}
    >
      {({ values, isValid, errors, touched, dirty }) => {
        return (
          <Form>
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
                Перше фото є головним. Максимальний розмір фотографії до 5 МБ. Формат фотографії: JPG, PNG. Мінімальна
                кількість фотографій - 6.
              </Paragraph>
              <ImageUploadComponent onImagesChange={handleImagesChange} />
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Основна інформація</SectionTitle>

              <label>
                <div className="containerLong">
                  Категорія<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field 
                  className={`${touched.category && !values.category && !isValid ? 'is-invalid' : ''}  fieldLong `}
                   component="select" 
                   name="category">
                    <option value="">Оберіть</option>
                    <option value="New">Нові</option>
                    <option value="Used">Вживані</option>
                    <option value="Servitude">Під пригон</option>
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="category" component="div" />
                </div>
              </label>

              <label>
                <div className="containerLong">
                  Марка авто<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field 
                    className={`${touched.car && touched.car.brand && !isValid && !values.car.brand ? 'is-invalid' : ''} fieldLong marg16`}
                    component="select" 
                   name="car.brand" 
                   onChange={handleBrandChange}>
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
                  <ErrorMessage name="car.brand" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Модель авто <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field 
                  className={`${touched.car && touched.car.model && !values.car.model && !isValid ? 'is-invalid' : ''}  fieldLong marg16`}
                  component="select" 
                  name="car.model">
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
                  <ErrorMessage name="car.model" component="div" />
                </div>
                
              </label>
              <label>
                <div className="containerLong">Номерний знак</div>
                <div className="flex">
                <Field
                  className={`${touched.car && touched.car.licensePlate  && !values.car.licensePlate && !isValid ? 'is-invalid' : ''}  fieldTextLong marg16`}
                  type="text"
                  name="car.licensePlate"
                  placeholder="АК 9245 АК"
                />
                <ErrorMessage name="car.licensePlate" component="div" />
                </div>
              </label>

              <label>
                <div className="containerLong">
                  Область<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.region && !values.region && !isValid ? 'is-invalid' : ''}  fieldLong marg16`}
                    name="region"
                    component="select" 
                    onChange={handleRegionChange}
                    value={selectedRegion}
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(regionsAndCities).map(region => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="region" component="div" />
                </div>
              </label>

              {/* <label>
                <div className="containerLong">
                  Місто<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field  className={`${!isValid ? 'is-invalid' : ''}  fieldLong marg16`}
                  component="select" name="city" onChange={handleCityChange} value={selectedCity}>
                    <option value="">Оберіть</option>
                    {regionsAndCities[selectedRegion] &&
                      regionsAndCities[selectedRegion].map(city => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                </div>
              </label> */}

              <label>
                <div className="containerLong">
                  Пробіг<span className="transparent"> (тис. км)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                <Field
                className={`${touched.car && touched.car.mileage  && !values.car.mileage && !isValid ? 'is-invalid' : ''}  fieldTextShort marg16`}
                type="number" 
                name="car.mileage">
                </Field>
                <ErrorMessage name="car.mileage" component="div" />
                </div>
              </label>

              <label>
                <div className="containerLong">
                  Рік випуску<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.year && !values.car.year && !isValid ? 'is-invalid' : ''}  fieldShort marg16`}
                  component="select" 
                  name="car.year">
                    <option value={0}>Оберіть</option>
                    <option value={1999}>1999</option>
                    <option value={2000}>2000</option>
                    <option value={2001}>2001</option>
                    <option value={2002}>2002</option>
                    <option value={2003}>2003</option>
                    <option value={2004}>2004</option>
                    <option value={2005}>2005</option>
                    <option value={2006}>2006</option>
                    <option value={2007}>2007</option>
                    <option value={2008}>2008</option>
                    <option value={2009}>2009</option>
                    <option value={2010}>2010</option>
                    <option value={2011}>2011</option>
                    <option value={2012}>2012</option>
                    <option value={2013}>2013</option>
                    <option value={2014}>2014</option>
                    <option value={2015}>2015</option>
                    <option value={2016}>2016</option>
                    <option value={2017}>2017</option>
                    <option value={2018}>2018</option>
                    <option value={2019}>2019</option>
                    <option value={2020}>2020</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.year" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Ціна<span className="transparent"> ($)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                <Field
                className={`${touched.car && touched.car.price  && !values.car.price && !isValid ? 'is-invalid' : ''}  fieldTextShort marg16`}
                 type="number" 
                 name="car.price" 
                 placeholder="1000 $">
                 </Field>
                <ErrorMessage name="car.price" component="div" />
                </div>
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
                  className={`${touched.car && touched.car.bodyType  && !values.car.bodyType && !isValid ? 'is-invalid' : ''}  fieldLong`}
                  component="select" 
                  name="car.bodyType">
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
                  <ErrorMessage name="car.bodyType" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Двигун<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.engineType  && !values.car.engineType  && !isValid ? 'is-invalid' : ''}  fieldLong marg16`}
                  component="select" 
                  name="car.engineType">
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
                  <ErrorMessage name="car.engineType" component="div" />
                </div>
               
              </label>

              <label>
                <div className="containerLong">
                  Об‘єм двигуна<span className="transparent"> (л)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.engineVolume  && !values.car.engineVolume && !isValid ? 'is-invalid' : ''} fieldLong marg16`}
                   type="number"
                    name="car.engineVolume" 
                    placeholder="3"
                    >
                    {/* <option value="">Оберіть</option>
                    <option value="1.1">До 1,1</option>
                    <option value="Low-volume">Від 1,2 до 1,7</option>
                    <option value="Medium-sized">Від 1,8 до 3,3</option>
                    <option value="Large-capacity">Від 3,5</option> */}
                  </Field>
                  <ErrorMessage name="car.engineVolume" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Привід<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.driveType  && !values.car.driveType && !isValid ? 'is-invalid' : ''}  fieldLong marg16`}
                  component="select"
                  name="car.driveType">
                    <option value="">Оберіть</option>
                    <option value="Front">Передній</option>
                    <option value="Posterior">Задній</option>
                    <option value="Full">Повний</option>
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.driveType" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Коробка передач<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.transmissionType  && !values.car.transmissionType && !isValid ? 'is-invalid' : ''}  fieldLong marg16`} 
                  component="select" 
                  name="car.transmissionType">
                    <option value="">Оберіть</option>
                    <option value="Mechanical">Механічна</option>
                    <option value="Automatic">Автоматична</option>
                    <option value="Robotic">Роботизована</option>
                    <option value="Variable">Варіативна</option>
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.transmissionType" component="div" />
                </div>
                
              </label>

              <label>
                <div className="containerLong">
                  Технічний стан<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field 
                  className={`${touched.car && touched.car.technicalState  && !values.car.technicalState && !isValid ? 'is-invalid' : ''}  fieldLong marg16`} 
                  component="select" 
                  name="car.technicalState">
                    <option value="">Оберіть</option>
                    <option value="Completely intact">Повністю непошкоджене</option>
                    <option value="Professionally repaired damage">Професійно відремонтовані пошкодження</option>
                    <option value="Unrepaired damage">Не відремонтовані пошкодження</option>
                    <option value="Not running/For spare parts">Не на ходу/На запчастини</option>
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.technicalState" component="div" />
                </div>
              </label>

              <label>
                <div className="containerLong">
                  Колір<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                  className={`${touched.car && touched.car.color  && !values.car.color && !isValid ? 'is-invalid' : ''}  fieldLong marg16`} 
                  component="select" 
                  name="car.color">
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
                  <ErrorMessage name="car.color" component="div" />
                </div>
              </label>

              <label>
                <div className="containerLong">VIN код</div>
                <div className="flex">
                <Field
                className={`${touched.car && touched.car.vin  && !values.car.vin && !isValid ? 'is-invalid' : ''}  fieldTextLong marg16`} 
                type="text" 
                name="car.vin" 
                placeholder="VF7LCRFJF74251989">
                </Field>
                <ErrorMessage name="car.vin" component="div" />
                </div>
              </label>
            </SectionContainer>
        <SectionContainer>
          <SectionTitle>Опис</SectionTitle>
          <Paragraph>
            Детально опишіть особливості вашого автомобілю або вкажіть додаткові
            паратметри (наприклад: круіз контроль, парктронік і т.д.)
          </Paragraph>
          <label>
          
            <Field
              className={`${touched.description && !values.description && !isValid ? 'is-invalid' : ''}  fieldInput marg16`} 
              as="textarea"
              name="description"
            ></Field>
           <ErrorMessage name="description" component="div" />
           
          </label>
        </SectionContainer>
            <SectionContainer>
              <SectionTitle>Контактні данні</SectionTitle>
              <label>
                <div className="containerLong">
                  Ваше ім’я<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                <Field 
                  className={`${touched.contactName && !values.contactName && !isValid ? 'is-invalid' : ''}   fieldLong`} 
                  type="text"
                 name="contactName" 
                 placeholder="Сергій"></Field>
                <ErrorMessage name="contactName" component="div" />
                </div>
              </label>
              <label>
                <div className="containerLong">
                  Телефон<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                <Field
                  className={`${touched.contactPhone && !values.contactPhone  && !isValid ? 'is-invalid' : ''}  fieldLong marg16`} 
                  type="number"
                  name="contactPhone"
                  placeholder="+38(0ХХ) ХХХ ХХ ХХ"
                ></Field>
                <ErrorMessage name="contactPhone" component="div" />
                </div>
              </label>
            </SectionContainer>
            <div className="buttonContainer">
              <button className="chekAnnouncementButton" type="button">
                Переглянути оголошення
              </button>
              <button className="submitButton" type="submit">
                Опублікувати оголошення
              </button>
              <NavLink to="/advertisementDone">confirm</NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};