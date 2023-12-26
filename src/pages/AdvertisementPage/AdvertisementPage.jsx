import {useState, useEffect, useRef } from 'react';
import {Container, Title, RequiredMarker, Paragraph,SectionTitle, SectionContainer } from '../AdvertisementPage/AdvertisementPage.styled.jsx';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { DropArrow } from '../../components/SearchForm/SearchFormSVG';
import Modal from '../../modal/modal';



const brandsAndModels = {
  BMW: ['X5', 'M3', 'X3'],
  Toyota: ['Camry', 'Corolla', 'Avalon'],
  'Mercedes-Benz': ['A-Class', 'B-Class', 'C-Class'],
};

const regionsAndCities = {
  'Kyivska': ['Київ', 'Біла-церква', 'Бровари', 'Ірпінь'],
  'Vinnytsia': ['Вінниця', 'Хмельницький', 'Бар'],
  'Volynska': ['Луцьк', 'Ковель', 'Нововолинь'],
  'Dniprovska': ['Дніпро', 'Кривий Ріг', 'Нікополь'],
  'Donetsk': ['Донецьк', 'Маріуполь', 'Макіївка'],
  'Zhytomyr': ['Житомир', 'Коростень', 'Бердичів'],
  'Zakarpattia': ['Ужгород', 'Мукачево', 'Хуст'],
  'Zaporizhzhia': ['Запоріжжя', 'Мелітополь', 'Бердянськ'],
  'Ivano-Frankivsk': ['Івано-Франківськ', 'Яремче', 'Коломия'],
  'Kirovohradsk': ['Кропивницький', 'Світловодськ', 'Олександрія'],
  'Luhansk': ['Луганськ', 'Алчевськ', 'Северодонецьк'],
  'Lviv': ['Львів', 'Дрогобич', 'Трускавець'],
  'Mykolayivska': ['Миколіїв', 'Первомайськ', 'Вознесенськ'],
  'Odesa': ['Одесса', 'Черноморськ', 'Ізмаїл'],
  'Poltava': ['Полтава', 'Кременчук', 'Миргород'],
  'Rivne': ['Рівне', 'Костопіль', 'Дубно'],
  'Sumy': ['Суми', 'Конотоп', 'Шостка'],
  'Ternopilsk': ['Тернопіль', 'Чортків', 'Бережани'],
  'Cherkasy': ['Черкаси', 'Сміла', 'Золотоноші'],
  'Chernivtsi': ['Чернівці', 'Вашківці', 'Хотин'],
  'Chernihivska': ['Чернігів', 'Ніжин', 'Прилуки'],
  'Kharkivska': ['Харків', 'Ізюм', 'Балаклея'],
  'Khersonsk': ['Херсон', 'Нова Каховка', 'Скадовськ'],
  'Khmelnytska': ['Хмельницький', 'Камʼянець-Подільський', 'Шепетівка'],
};

  const AdvertisementForm = ({ initialValues, onSubmit}) => {
    const dispatch = useDispatch();
    const formikRef = useRef(null);

    const [availableModels, setAvailableModels] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
     if (formikRef.current) {
       formikRef.current.resetForm({ values: initialValues });
      }
      }, [initialValues]);

  const clearForm = () => {
    dispatch(setIsOpen(true));
  }

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
  
    const models = brandsAndModels[selectedBrand] || [];
  
    setAvailableModels(models);
  
    formikRef.current.setFieldValue('model', '');
    formikRef.current.setFieldValue('brand', selectedBrand); 
  };

  const handleRegionChange = (e) => {
    const regionValue = e.target.value;
    setSelectedRegion(regionValue);
    setSelectedCity(''); 
    formikRef.current.setFieldValue('city', '');
  };
  
  const handleCityChange = (e) => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue);
    formikRef.current.setFieldValue('city', cityValue);
  };

    return (
      <Formik
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      innerRef={formik => (formikRef.current = formik)}
      >
            <Form className='form'>
              <SectionContainer>
              <SectionTitle>Етапи розміщення оголошення</SectionTitle>
              </SectionContainer>

              <SectionContainer>
              <SectionTitle>Фото автомобілю<RequiredMarker>*</RequiredMarker></SectionTitle>
                <Paragraph>
                  Перше фото є головним. Максимальний розмір фотографії до 5 МБ. Формат фотографії: JPG, PNG. Мінімальна кількість фотографій - 6.
                 </Paragraph>
              </SectionContainer>

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
                    name="category"
                  >
                    {/* <option value="All">Усі варіанти</option> */}
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
                    name="brand"
                    onChange={handleBrandChange}
                  >
                    <option value=""></option>
                    {Object.keys(brandsAndModels).map((brand) => (
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
                  <Field className="fieldLong marg16" as="select" name="model">
                    {/* <option value="">Усі варіанти</option> */}
                    <option value=""></option>
                    {availableModels.map((model) => (
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
                <div className="containerLong">
                    Номерний знак
                    </div>
                    <Field
                      className="fieldTextLong marg16"
                      type="text"
                      name="licensePlate"
                      placeholder="АК 9245 АК"
                    >
                    </Field>
                  </label>
               
                  <label>
        <div className="containerLong">
          Область<RequiredMarker>*</RequiredMarker>
        </div>
        <div className="arrowDiv">
          <select
            className="fieldLong marg16"
            name="region"
            onChange={handleRegionChange}
            value={selectedRegion}
          >
            <option value=""></option>
            {Object.keys(regionsAndCities).map((region) => (
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
            name="city"
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option value=""></option>
            {regionsAndCities[selectedRegion] &&
              regionsAndCities[selectedRegion].map((city) => (
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
                    Пробіг до<RequiredMarker>*</RequiredMarker>
                    </div>
                    <div className="arrowDiv">
                    <Field
                      className="fieldLong marg16"
                      as="select"
                      name="Mileage"
                    >
                      <option value="10000">10 тис км</option>
                      <option value="20000">20 тис км</option>
                      <option value="30000">30 тис км</option>
                      <option value="40000">40 тис км</option>
                      <option value="50000">50 тис км</option>
                      <option value="60000">60 тис км</option>
                      <option value="70000">70 тис км</option>
                      <option value="80000">80 тис км</option>
                      <option value="90000">90 тис км</option>
                      <option value="100000">100 тис км</option>
                      <option value="125000">125 тис км</option>
                      <option value="150000">150 тис км</option>
                      <option value="200000">200 тис км</option>
                      <option value="250000">250 тис км</option>
                      <option value="300000">300 тис км</option>
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
                    name="Year"
                  >
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
                  Ціна<RequiredMarker>*</RequiredMarker>
                  </div>
                  <Field
                    className="fieldTextShort"
                    type="text"
                    name="Price"
                    placeholder="1000 $"
                  >
                  </Field>
                </label>
              </SectionContainer>

              <SectionContainer>
                <SectionTitle>Технічні характеристики</SectionTitle>
                
                  <label>
                    <div className="containerLong">
                    Тип кузова<RequiredMarker>*</RequiredMarker>
                    </div>
                    <div className="arrowDiv">
                    <Field className="fieldLong marg16" as="select" name="bodyType">
                      {/* <option value="All">Усі варіанти</option> */}
                      <option value="Універсал">Універсал</option>
                      <option value="Седан">Седан</option>
                      <option value="Кабріолет">Кабріолет</option>
                      <option value="Купе">Купе</option>
                      <option value="Внедорожник">Внедорожник</option>
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
                    <Field className="fieldLong marg16" as="select" name="fuelType">
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
                    Об‘єм двигуна (л)<RequiredMarker>*</RequiredMarker>
                    </div>
                    <div className="arrowDiv">
                    <Field
                      className="fieldLong marg16"
                      as="select"
                      name="engineCapacity"
                    >
                      <option value="Microliter">До 1,1 літра</option>
                      <option value="Low-volume">Від 1,2 до 1,7 літра</option>
                      <option value="Medium-sized">Від 1,8 до 3,3 літра</option>
                      <option value="Large-capacity">Від 3,5 літра</option>
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
                      name="driveType"
                    >
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
                      name="transmission"
                    >
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
                      name="condition"
                    >
                      <option value="Completely intact">
                        Повністю непошкоджене
                      </option>
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
                    <Field className="fieldLong marg16" as="select" name="color">
                      {/* <option value="">Колір</option> */}
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
                <div className="containerLong">
                  VIN код
                  </div>
                  <Field
                    className="fieldTextLong"
                    type="text"
                    name="VIN"
                    placeholder="VF7LCRFJF74251989"
                  >
                  </Field>
                </label>
              </SectionContainer>

              <SectionContainer>
                <SectionTitle>Опис</SectionTitle>
                <Paragraph>
                  Детально опишіть особливості вашого автомобілю або вкажіть додаткові паратметри (наприклад: круіз контроль, парктронік і т.д.)
                </Paragraph>
                <label>
                  <Field
                    className="fieldInput marg16"
                    type="text"
                    name="AboutCar"
                  >
                  </Field>
                </label>
              </SectionContainer>

              <SectionContainer>
                <SectionTitle>Контактні данні</SectionTitle>
                <label>
                <div className="containerLong">
                  Ваше ім’я<RequiredMarker>*</RequiredMarker>
                  </div>
                  <Field
                    className="fieldLong marg16"
                    type="text"
                    name="username"
                    placeholder="Сергій"
                  >
                  </Field>
                </label>
                <label>
                <div className="containerLong">
                  Телефон<RequiredMarker>*</RequiredMarker>
                  </div>
                  <Field
                    className="fieldLong marg16"
                    type="phone"
                    name="phone"
                    placeholder="+38(0ХХ) ХХХ ХХ ХХ"
                  >
                  </Field>
                </label>
              </SectionContainer>

            <div>
              <button >
                Переглянути оголошення
              </button>
              <button className="submitButton" type="submit">
              Опублікувати оголошення
              </button>
              <button className="clearButton" onClick={clearForm} type="button">
              Очистити все
            </button>
            </div>

            </Form>
      </Formik>
    );

};



const AdvertisementPage = () => {

  const [values, setValues] = useState({
    category: 'All',
    brand: '',
    model: '',
    licensePlate: '',
    region: '',
    Mileage: '10000',
    Year: '1999',
    Price: '',
    bodyType: 'All',
    fuelType: 'Electro',
    engineCapacity: 'Microliter',
    driveType: 'Front',
    transmission: 'Mechanical',
    condition: 'Completely intact',
    color: '',
    VIN: '',
    AboutCar: '',
    username: '',
    phone: '',
  });

  const handleSearch = values => {
    setValues(values);
    console.log(values);
  };

  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      <AdvertisementForm initialValues={values} onSubmit={handleSearch}/>

      <Modal handleSearch={handleSearch}/>
    </Container>
  );
};

export default AdvertisementPage;