import { Field, Formik, Form } from 'formik';
import { Search } from "./SearchForm.styled";

export const SearchForm = () => {
   const initialValues = {
     status: '',
     brand: '',
     model: '',
     region: '',
     yearFrom: '',
     yearTo: '',
     priceFrom: '',
     priceTo: '',
  };
  const handleSearch = values => {
    console.log(values)
  };
  return (
    <Search>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        <Form>
          <div className="topWraper">
            <h3 className="title">Пошук</h3>
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
          <button type="submit">Пошук</button>
        </Form>
      </Formik>
    </Search>
  );
};
export default SearchForm;
