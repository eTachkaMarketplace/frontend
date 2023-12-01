import { Field, Formik, Form } from 'formik';
import { Search } from './SearchForm.styled';
import { useEffect, useRef } from 'react';

export const SearchForm = ({ initialValues, onSubmit }) => {
  const formikRef = useRef(null);
   useEffect(() => {
     if (formikRef.current) {
       formikRef.current.resetForm({ values: initialValues });
     }
   }, [initialValues]);
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
            <label>
              <Field className="fieldLong marg16" as="select" name="status">
                <option value="">Статус</option>
                <option value="нові">Нові</option>
                <option value="вживані">Вживані</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong marg16" as="select" name="brand">
                <option value="">Марка</option>
                <option value="BMW">BMW</option>
                <option value="Mersedes">Mersedes</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong marg16" as="select" name="model">
                <option value="">Модель</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong marg16" as="select" name="region">
                <option value="">Область</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>
            <div className="shortDiv marg16">
              <label>
                <Field className="fieldShort" as="select" name="yearFrom">
                  <option value="">Рік від</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
              <label>
                <Field className="fieldShort" as="select" name="yearTo">
                  <option value="">Рік до</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
            </div>
            <div className="shortDiv">
              <label>
                <Field className="fieldShort" as="select" name="priceFrom">
                  <option value="">Ціна від</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
              <label>
                <Field className="fieldShort" as="select" name="priceTo">
                  <option value="">Ціна до</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
            </div>
          </div>
          <div className="bottomWraper">
            <h3 className="titleB">Технічні характеристики</h3>
            <label>
              <Field className="fieldLong marg16" as="select" name="bodyType">
                <option value="">Тип кузова</option>
                <option value="нові">Тип1</option>
                <option value="вживані">Тип2</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong marg16" as="select" name="fuelType">
                <option value="">Палево</option>
                <option value="BMW">Бензин</option>
                <option value="Mersedes">Дизель</option>
              </Field>
            </label>
            <label>
              <Field
                className="fieldLong marg16"
                as="select"
                name="engineCapacity"
              >
                <option value="">Об'єм двигуна</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>
            {/* <div className="shortDiv marg16">
              <label>
                <Field
                  className="fieldShort "
                  as="select"
                  name="engineCapacityFrom"
                >
                  <option value="">Об'єм від</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>

              <label>
                <Field
                  className="fieldShort "
                  as="select"
                  name="engineCapacityFromTo"
                >
                  <option value="">Об'єм до</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
            </div> */}
            <div className="shortDiv marg16">
              <label>
                <Field className="fieldShort " as="select" name="mileageFrom">
                  <option value="">Пробіг від</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>

              <label>
                <Field className="fieldShort " as="select" name="mileageTo">
                  <option value="">Пробіг до</option>
                  <option value="Щось1">Щось1</option>
                  <option value="Щось2">Щось2</option>
                </Field>
              </label>
            </div>
            <label>
              <Field className="fieldLong marg16" as="select" name="driveType">
                <option value="">Привід</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>

            <label>
              <Field
                className="fieldLong marg16"
                as="select"
                name="transmission"
              >
                <option value="">Коробка передач</option>
                <option value="Щось1">Автомат</option>
                <option value="Щось2">Ручна</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong marg16" as="select" name="condition">
                <option value="">Технічний стан</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>
            <label>
              <Field className="fieldLong" as="select" name="color">
                <option value="">Колір</option>
                <option value="Щось1">Щось1</option>
                <option value="Щось2">Щось2</option>
              </Field>
            </label>
          </div>

          <div className="btnWraper">
            <button className="clearButton" type="button">
              Очистити все
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
