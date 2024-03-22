import { DropArrow } from 'components/SearchForm/SearchFormSVG';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'modal/modal';
import ConfirmModalAdvertisement from "../../modal/confirmModal/confirmModalAdvertisement";
import DataAccessor from '../Class/DataAccessor';
import ImageUploadComponent from './imgUpload';
import { Paragraph, RequiredMarker } from 'pages/AdvertisementPage/AdvertisementPage.styled';
import {
  SectionContainer,
  SectionTitle,
  Form,
  Field,
  ErrorMessage,
  StyledArrowSVG,
  StyledArrowMobSVG,
  StyledCreateSVG,
  StyledPostSVG,
} from './AdvertisementForm.styled';
import {  useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import { selectToken, selectUser } from 'redux/auth/selectors';
import { setIsOpen } from 'redux/modal/modalSlice';

const phoneRegExp = /^(\+380)[0-9]{9}$/;

Yup.addMethod(Yup.string, 'isPhone', function () {
  return this.test('is-valid-phone', 'Номер повинен починатись з +380 і містити 12 цифр', function (value) {
    return phoneRegExp.test(value);
  });
});

const userSchema = Yup.object().shape({
  car: Yup.object().shape({
    licensePlate: Yup.string().max(10, 'Номер до 10 символів').notRequired(),
    brand: Yup.string().required('це поле обов`язкове для заповнення'),
    model: Yup.string().required('це поле обов`язкове для заповнення'),
    mileage: Yup.number().required("це поле обов`язкове для заповнення").positive("Введіть додатне число"),
    year: Yup.number().required('це поле обов`язкове для заповнення').min(1999, 'Виберіть рік'),
    price:Yup.number().required("це поле обов`язкове для заповнення").positive("Введіть додатне число").max(999999, 'Максимальна ціна - 999999 тисяч'),
    bodyType: Yup.string().required('це поле обов`язкове для заповнення'),
    engineType: Yup.string().required('це поле обов`язкове для заповнення'),
    engineVolume: Yup.number().required("це поле обов`язкове для заповнення")
        .test('max-digits', 'Максимум 6 символів', value => {
          if (value) {
            const stringValue = value.toString();
            return stringValue.length <= 6;
          }
          return true;})
        .positive("Введіть додатне число"),
    driveType: Yup.string().required('це поле обов`язкове для заповнення'),
    transmissionType: Yup.string().required('це поле обов`язкове для заповнення'),
    technicalState: Yup.string().required('це поле обов`язкове для заповнення'),
    color: Yup.string().required('це поле обов`язкове для заповнення'),
    vin: Yup.string().matches(/^[a-zA-Z0-9]{1,17}$/, 'VIN код до 17 символів. Тільки латинські букви та цифри').notRequired(),
   
    

  }),
  category: Yup.string().required('це поле обов`язкове для заповнення'),
  region: Yup.string().required('це поле обов`язкове для заповнення'),
  city: Yup.string().required('це поле обов`язкове для заповнення'),
  contactName: Yup.string()
  .matches(/^[a-zA-Zа-яА-ЯєЄіІїЇґҐ' -]*$/, 'Поле "Ім`я" може містити лише літери та знак “-“')
  // .min(2, 'Мінімум 2 літери')
  .max(40, 'Максимум 40 літер')
  .test('is-not-empty', 'Поле "Ім`я" не може бути пустим', value => value.trim() !== '')
  .required('це поле обов`язкове для заповнення'),
  contactPhone: Yup.string()
  .isPhone()
  .required('це поле обов`язкове для заповнення')
  // description: Yup.string().required('це поле обов`язкове для заповнення'),
  
});

export const AdvertisementForm = () => {
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const navigate = useNavigate();

  const [availableModels, setAvailableModels] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [formImages, setFormImages] = useState([]);
  const [photosSelected, setPhotosSelected] = useState(false);
  const dataAccessor = new DataAccessor();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const token = useSelector(selectToken);
  console.log(formImages);

  const authUser = useSelector(selectUser);
  const { firstName, phone } = authUser;

  const initialValues = {
        description: "",
        region: "",
        city: "",
        category: "",
        car: {
          brand: "",
          model: "",
          vin: "",
          year: 0,
          price: 0,
          licensePlate: "",
          mileage: 0,
          transmissionType: "",
          engineType: "",
          engineVolume: 0,
          technicalState: "",
          bodyType: "",
          driveType: "",
          color: ""
        },
        contactName: firstName || '',
        contactPhone: phone || '+380',
        isActive: true,  
    }

  const handleImagesChange = newImages => {
    setFormImages(newImages);
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
      navigate('/advertisementDone');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = () => {
    dispatch(setIsOpen(true));
  };

  const handleBrandChange = event => {
    const selectedBrand = event.target.value;
   
    const models = dataAccessor.getModelsByBrand(selectedBrand);

    setAvailableModels(models);

    formikRef.current.setFieldValue('car.brand', '');
    formikRef.current.setFieldValue('car.brand', selectedBrand);
  };

  const handleRegionChange = e => {
    const regionValue = e.target.value;
    setSelectedRegion(regionValue);
    setSelectedCity(''); 
    formikRef.current.setFieldValue('region', regionValue);
    formikRef.current.setFieldValue('city', ''); 
  };
  
  const handleCityChange = e => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue); 
    formikRef.current.setFieldValue('city', cityValue);
  };
  
  const resetForm = () => {
    formikRef.current.resetForm({ values: initialValues });
    setFormImages([]);
    setSelectedRegion('')
  };
  useEffect(() => {}, [formImages]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
      innerRef={formik => (formikRef.current = formik)}
    >
      {({ values, isValid, errors, touched, dirty, handleChange }) => {
        return (
          <Form>
            <Modal>
              <ConfirmModalAdvertisement resetForm={resetForm} />
            </Modal>
            <button className="clearButton" onClick={openModal} type="button">
              Очистити все
            </button>
            <SectionContainer>
              <SectionTitle>Етапи розміщення оголошення</SectionTitle>
              <div className="styled">
                {windowWidth <= 1000 ? <StyledArrowMobSVG /> : <StyledArrowSVG />}
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
                Перше фото є головним. Максимальний розмір всіх фотографій до 10 МБ. Формат фотографії: JPG, PNG.
                Мінімальна кількість фотографій - 6.
              </Paragraph>
              <ImageUploadComponent
                setImg={formImages}
                onImagesChange={newImages => {
                  handleImagesChange(newImages);
                  setPhotosSelected(newImages.length > 0);
                }}
              />
              {formImages.length > 0 && formImages.length < 6 && (
                <div className="error-message">Мінімальна кількість фото - 6</div>
              )}
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
                    name="category"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.category).map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="category" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Марка авто<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.brand && !isValid && !values.car.brand ? 'is-invalid' : ''} fieldLong`}
                    component="select"
                    name="car.brand"
                    onChange={handleBrandChange}
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.brandsAndModels).map(brand => (
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

              <label className="marg16">
                <div className="containerLong">
                  Модель авто <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.model && !values.car.model && !isValid ? 'is-invalid' : ''}  fieldLong`}
                    component="select"
                    name="car.model"
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
                  <ErrorMessage name="car.model" component="div" />
                </div>
              </label>
              <label className="marg16">
                <div className="containerLong">Номерний знак</div>
                <div className="flex">
                  <Field
                    className={`${values.car.licensePlate.length > 10 ? 'is-invalid' : ''} fieldTextLong`}
                    type="text"
                    name="car.licensePlate"
                    placeholder="АК 9245 АК"
                  />
                  <ErrorMessage name="car.licensePlate" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Область<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.region && !values.region && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    name="region"
                    component="select"
                    onChange={handleRegionChange}
                    value={selectedRegion}
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.regionsAndCities).map(region => (
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

              <label className="marg16">
                <div className="containerLong">
                  Місто<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.city && !values.city && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="city"
                    onChange={handleCityChange}
                    value={selectedCity}
                  >
                    <option value="">Оберіть</option>
                    {dataAccessor.getCitiesByRegion(selectedRegion).map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="city" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Пробіг<span className="transparent"> (тис. км)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                  <Field
                    className={`${touched.car && touched.car.mileage && !values.car.mileage && !isValid ? 'is-invalid' : ''}  fieldTextShort`}
                    type="number"
                    name="car.mileage"
                  ></Field>
                  <ErrorMessage name="car.mileage" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Рік випуску<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.year && !values.car.year && !isValid ? 'is-invalid' : ''}  fieldShort `}
                    component="select"
                    name="car.year"
                  >
                    <option value={0}>Оберіть</option>
                    {dataAccessor.getYears().map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.year" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Ціна<span className="transparent"> ($)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                  <Field
                    className={`${touched.car && touched.car.price && !values.car.price && !isValid ? 'is-invalid' : ''}  fieldTextShort `}
                    type="number"
                    name="car.price"
                    placeholder="1000 $"
                  ></Field>
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
                    className={`${touched.car && touched.car.bodyType && !values.car.bodyType && !isValid ? 'is-invalid' : ''}  fieldLong`}
                    component="select"
                    name="car.bodyType"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.bodyType).map(bodyType => (
                      <option key={bodyType} value={bodyType}>
                        {bodyType}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.bodyType" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Тип двигуна<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.engineType && !values.car.engineType && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="car.engineType"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.engineType).map(engineType => (
                      <option key={engineType} value={engineType}>
                        {engineType}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.engineType" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Об‘єм двигуна<span className="transparent"> (л)</span>
                  <RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.engineVolume && !values.car.engineVolume && !isValid ? 'is-invalid' : ''} fieldLong `}
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

              <label className="marg16">
                <div className="containerLong">
                  Тип приводу<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.driveType && !values.car.driveType && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="car.driveType"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.driveType).map(driveType => (
                      <option key={driveType} value={driveType}>
                        {driveType}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.driveType" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Коробка передач<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.transmissionType && !values.car.transmissionType && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="car.transmissionType"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.transmissionType).map(transmissionType => (
                      <option key={transmissionType} value={transmissionType}>
                        {transmissionType}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.transmissionType" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Технічний стан<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.technicalState && !values.car.technicalState && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="car.technicalState"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.technicalState).map(technicalState => (
                      <option key={technicalState} value={technicalState}>
                        {technicalState}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.technicalState" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">
                  Колір<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="arrowDiv">
                  <Field
                    className={`${touched.car && touched.car.color && !values.car.color && !isValid ? 'is-invalid' : ''}  fieldLong `}
                    component="select"
                    name="car.color"
                  >
                    <option value="">Оберіть</option>
                    {Object.keys(dataAccessor.color).map(color => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </Field>
                  <div className="arrow">
                    <DropArrow />
                  </div>
                  <ErrorMessage name="car.color" component="div" />
                </div>
              </label>

              <label className="marg16">
                <div className="containerLong">VIN код</div>
                <div className="flex">
                  <Field
                    className={`${errors.car && errors.car.vin ? 'is-invalid' : ''} fieldTextLong`}
                    // className={`${values.car.vin.length > 17 ? 'is-invalid' : ''} fieldTextLong`}
                    type="text"
                    name="car.vin"
                    placeholder="VF7LCRFJF74251989"
                  ></Field>
                  <ErrorMessage name="car.vin" component="div" />
                </div>
              </label>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Опис</SectionTitle>
              <Paragraph>
                Детально опишіть особливості вашого автомобілю або вкажіть додаткові паратметри (наприклад: круіз
                контроль, парктронік і т.д.)
              </Paragraph>

              <label className="marg16 description">
                <Field
                  // className={`${touched.description && !values.description && !isValid ? 'is-invalid' : ''}  fieldInput `}
                  className={`fieldInput `}
                  component="textarea"
                  name="description"
                ></Field>
                {/* <ErrorMessage name="description" component="div" /> */}
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
                    placeholder="Сергій"
                  ></Field>
                  <ErrorMessage name="contactName" component="div" />
                </div>
              </label>
              <label className="marg16">
                <div className="containerLong">
                  Телефон<RequiredMarker>*</RequiredMarker>
                </div>
                <div className="flex">
                  <Field
                    className={`${touched.contactPhone && errors.contactPhone ? 'is-invalid' : ''}  fieldLong `}
                    type="text"
                    name="contactPhone"
                    value={values.contactPhone}
                    onChange={handleChange}
                    onKeyDown={e => {
                      const newValue = e.target.value;
                      if ((e.key === 'Delete' || e.key === 'Backspace') && newValue === '+380') {
                        e.preventDefault();
                      }
                    }}
                    placeholder="+38(0ХХ) ХХХ ХХ ХХ"
                  ></Field>
                  <ErrorMessage name="contactPhone" component="div" />
                </div>
              </label>
            </SectionContainer>
            <div className="buttonContainer">
              {/* <button className="chekAnnouncementButton" type="button">
                Переглянути оголошення
              </button> */}
              <button
                className="submitButton"
                type="submit"
                disabled={!isValid || !dirty || !photosSelected || formImages.length < 6}
              >
                Опублікувати оголошення
              </button>
              {/* <NavLink to="/advertisementDone">confirm</NavLink> */}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};