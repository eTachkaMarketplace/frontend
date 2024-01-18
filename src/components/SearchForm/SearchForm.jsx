import { Field, Formik, Form } from 'formik';
import { Search } from './SearchForm.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { Arrow, DropArrow } from './SearchFormSVG';
import { useLocation } from 'react-router-dom';

export const SearchForm = ({ initialValues, onSubmit }) => {
  const distatch = useDispatch();
  const location = useLocation();
  const formikRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const carMark = {
    BMW: ['X5', 'M3', 'I3'],
    Toyota: ['Camry', 'Corolla', 'Avalon'],
    Mercedes: ['A-Class', 'B-Class', 'C-Class'],
  };

  const handleBrandChange = event => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel('');
  };

  const handleModelChange = event => {
    const model = event.target.value;
    setSelectedModel(model);
  };

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm({ values: initialValues });
    }
  }, [initialValues]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const favouritesParam = searchParams.get('category');
    console.log(favouritesParam);
    if (favouritesParam) {
      formikRef.current.setFieldValue('category', favouritesParam);
    }
  }, [location.search]);

  const clearForm = () => {
    distatch(setIsOpen(true));
  };
  
  return (
    <Search>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
        innerRef={formik => (formikRef.current = formik)}
      >
        <Form>
          <div className="topWraper">
            <h3 className="title">Розширений пошук</h3>
            <h5 className="underTitle">Основні характеристики</h5>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="category">
                  <option value="">Категорія</option>
                  <option value="Нові">Нові</option>
                  <option value="Вживані">Вживані</option>
                  <option value="Під пригон">Під пригон</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field
                  className="fieldLong marg16"
                  as="select"
                  name="brand"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="">Марка</option>
                  {Object.keys(carMark).map(brand => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>

            <div className="arrowDiv">
              <label>
                <Field
                  className="fieldLong marg16"
                  as="select"
                  name="model"
                  value={selectedModel}
                  onChange={handleModelChange}
                >
                  <option value="">Виберіть марку</option>
                  {carMark[selectedBrand]?.map(model => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="region">
                  <option value="">Область</option>
                  <option value="Kyivska">Київська</option>
                  <option value="Vinnytsia">Вінницька</option>
                  <option value="Volynsk">Волинська</option>
                  <option value="Dniprovska">Дніпровська</option>
                  <option value="Donetsk">Донецька</option>
                  <option value="Zhytomyr">Житомирська</option>
                  <option value="Zakarpattia">Закарпатська</option>
                  <option value="Zaporizhzhia">Запорізька</option>
                  <option value="Ivano-Frankivsk">Івано-франківська</option>
                  <option value="Kirovohradsk">Кіровоградська</option>
                  <option value="Luhansk">Луганська</option>
                  <option value="Lviv">Львівська</option>
                  <option value="Mykolayivska">Миколаївська</option>
                  <option value="Odesa">Одеська</option>
                  <option value="Poltava">Полтавська</option>
                  <option value="Rivne">Рівенська</option>
                  <option value="Sumy">Сумська</option>
                  <option value="Ternopilsk">Тернопільська</option>
                  <option value="Cherkasy">Черкаська</option>
                  <option value="Chernivtsi">Чернівецька</option>
                  <option value="Chernihivska">Чернігівська</option>
                  <option value="Kharkivska">Харківська</option>
                  <option value="Khersonsk">Херсонська</option>
                  <option value="Khmelnytska">Хмельницька</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="shortDiv marg16">
              <label>
                <Field className="fieldTextShort" type="text" name="yearMin" placeholder="Введіть рік від" />
              </label>
              <label>
                <Field className="fieldTextShort" type="text" name="yearMax" placeholder="Введіть рік до" />
              </label>
            </div>
            <div className="shortDiv">
              <label>
                <Field className="fieldTextShort" type="text" name="priceMin" placeholder="Введіть ціну від $" />
              </label>

              <label>
                <Field className="fieldTextShort" type="text" name="priceMax" placeholder="Введіть ціну до $" />
              </label>
            </div>
          </div>
          <div className="bottomWraper">
            <h3 className="titleB">Технічні характеристики</h3>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="bodyType">
                  <option value="">Тип кузова</option>
                  <option value="Universal">Універсал</option>
                  <option value="Sedan">Седан</option>
                  <option value="Cabriolet">Кабріолет</option>
                  <option value="Compartment">Купе</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="engineType">
                  <option value="">Двигун</option>
                  <option value="Electro">Електрична силова установка</option>
                  <option value="Hibrid">Гібрід</option>
                  <option value="Gasoline">Бензиновий</option>
                  <option value="Gaseous">Газовий</option>
                  <option value="Diesel">Дизельний</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            {/* <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="engineVolumeMax">
                  <option value="">Об'єм двигуна</option>
                  <option value="1.1">До 1,1 літра</option>
                  <option value="1.7">Від 1,2 до 1,7 літра</option>
                  <option value="3.3">Від 1,8 до 3,3 літра</option>
                  <option value="3.5">Від 3,5 літра</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div> */}
            <div className="shortDiv marg16">
              <label>
                <Field className="fieldTextShort" type="text" name="engineVolumeMin" placeholder="Об'єм двигуна від" />
              </label>

              <label>
                <Field className="fieldTextShort" type="text" name="engineVolumeMax" placeholder="Об'єм двигуна до" />
              </label>
            </div>
            <div>
              <label>
                <Field className="fieldTextLong marg16" type="text" name="mileageMax" placeholder="Введіть пробіг до" />
              </label>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="driveType">
                  <option value="">Привід</option>
                  <option value="Front">Передній</option>
                  <option value="Posterior">Задній</option>
                  <option value="Full">Повний</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="transmissionType">
                  <option value="">Коробка передач</option>
                  <option value="Mechanical">Механічна</option>
                  <option value="Automatic">Автоматична</option>
                  <option value="Robotic">Роботизована</option>
                  <option value="Variable">Варіативна</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="technicalState">
                  <option value="">Технічний стан</option>
                  <option value="Completely">Повністю непошкоджене</option>
                  <option value="Repaired">Професійно відремонтовані пошкодження</option>
                  <option value="Unrepaired">Не відремонтовані пошкодження</option>
                  <option value="Parts">Не на ходу/На запчастини</option>
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong" as="select" name="color">
                  <option value="">Колір</option>
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
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </div>

          <div className="btnWraper">
            <button className="clearButton" onClick={clearForm} type="button">
              Очистити все <Arrow />
            </button>
            <button className="submitButton" type="submit">
              Пошук
            </button>
          </div>
        </Form>
      </Formik>
    </Search>
  );
};
export default SearchForm;

 