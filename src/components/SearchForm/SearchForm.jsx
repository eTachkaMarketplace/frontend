import { Field, Formik, Form } from 'formik';
import { Search } from './SearchForm.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { Arrow, DropArrow } from './SearchFormSVG';
import { useLocation } from 'react-router-dom';
import DataAccessor from 'components/Class/DataAccessor';

export const SearchForm = ({ hidden, initialValues, toggleMenu, onSubmit }) => {
  const distatch = useDispatch();
  const location = useLocation();
  const formikRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dataAccessor = new DataAccessor();

  const carMark = dataAccessor.getModels();
  const category = dataAccessor.getCategories();
  const region = dataAccessor.getRegion();
  const bodyTypes = dataAccessor.getBodyTypes();
  const engineType = dataAccessor.getEngineTypes();
  const driveType = dataAccessor.getDriveTypes();
  const transmissionType = dataAccessor.getTransmissionTypes();
  const technicalState = dataAccessor.getTechnicalStates();
  const color = dataAccessor.getColors();

  const handleBrandChange = event => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel('');

    formikRef.current.setFieldValue('brand', brand);
    formikRef.current.setFieldValue('model', '');
  };

  const handleModelChange = event => {
    const model = event.target.value;
    setSelectedModel(model);
    formikRef.current.setFieldValue('model', model);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const newWidth = entries[0]?.contentRect?.width;
      if (newWidth && newWidth !== screenWidth) {
        setScreenWidth(newWidth);
      }
    });

    // Attach ResizeObserver to the window
    resizeObserver.observe(window.document.body);

    // Cleanup the ResizeObserver when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, [screenWidth]);

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.resetForm(); 
    }
    setSelectedBrand(initialValues.brand);
    setSelectedModel(initialValues.model);
  }, [initialValues]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const favouritesParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    const modelParam = searchParams.get('model');
    const regionParam = searchParams.get('region');
    const yearMinParam = searchParams.get('yearMin');
    const yearMaxParam = searchParams.get('yearMax');
    const priceMinParam = searchParams.get('priceMin');
    const priceMaxParam = searchParams.get('priceMax');
    if (favouritesParam !== null) {
      formikRef.current.setFieldValue('category', favouritesParam);
      onSubmit({ ...initialValues, category: favouritesParam });
    }
    if (
      brandParam ||
      modelParam ||
      regionParam ||
      yearMaxParam ||
      yearMinParam ||
      priceMaxParam ||
      priceMinParam ||
      priceMaxParam
    ) {
      formikRef.current.setFieldValue('brand', brandParam);
      formikRef.current.setFieldValue('model', modelParam);
      formikRef.current.setFieldValue('region', regionParam);
      formikRef.current.setFieldValue('yearMin', yearMinParam);
      formikRef.current.setFieldValue('yearMax', yearMaxParam);
      formikRef.current.setFieldValue('priceMin', priceMinParam);
      formikRef.current.setFieldValue('priceMax', priceMaxParam);
      onSubmit({
        ...initialValues,
        brand: brandParam,
        model: modelParam,
        region: regionParam,
        yearMin: yearMinParam,
        yearMax: yearMaxParam,
        priceMin: priceMinParam,
        priceMax: priceMaxParam,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const clearForm = () => {
    distatch(setIsOpen(true));
  };

  const hiddenStyle = {
    display: 'none',
  };

  return (
    <Search style={hidden ? hiddenStyle : {}}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          if (screenWidth <= 769) {
            toggleMenu();
          }
          onSubmit(values);
        }}
        innerRef={formik => (formikRef.current = formik)}
      >
        <Form>
          <div className="topWraper">
            {screenWidth > 769 ? <h3 className="title">Розширений пошук</h3> : null}
            <h5 className="underTitle">Основні характеристики</h5>
            <div className="arrowDiv">
              <label>
                <Field className={`fieldLong marg16`} as="select" name="category">
                  <option value="">Категорія</option>
                  {Object.entries(category).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
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
                  <option value="">Виберіть модель</option>
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
                  {Object.keys(region).map(region => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
            <div className="shortDiv marg16">
              <label>
                <Field className="fieldTextShort" min="0" type="number" name="yearMin" placeholder="Рік від" />
              </label>
              <label>
                <Field className="fieldTextShort" min="0" type="number" name="yearMax" placeholder="Рік до" />
              </label>
            </div>
            <div className="shortDiv">
              <label>
                <Field className="fieldTextShort" min="0" type="number" name="priceMin" placeholder="Ціна від ($)" />
              </label>

              <label>
                <Field className="fieldTextShort" min="0" type="number" name="priceMax" placeholder="Ціна до ($)" />
              </label>
            </div>
          </div>
          <div className="bottomWraper">
            <h3 className="titleB">Технічні характеристики</h3>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="bodyType">
                  <option value="">Тип кузова</option>
                  {Object.entries(bodyTypes).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
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
                <Field className="fieldLong marg16" as="select" name="engineType">
                  <option value="">Тип двигуна</option>
                  {Object.entries(engineType).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
                    </option>
                  ))}
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
                <Field
                  className="fieldTextShort"
                  type="number"
                  min="0"
                  name="engineVolumeMin"
                  placeholder="Об'єм двигуна від"
                />
              </label>

              <label>
                <Field
                  className="fieldTextShort"
                  type="number"
                  name="engineVolumeMax"
                  min="0"
                  placeholder="Об'єм двигуна до"
                />
              </label>
            </div>
            <div>
              <label>
                <Field
                  className="fieldTextLong marg16"
                  type="number"
                  name="mileageMax"
                  placeholder="Пробіг до"
                  min="0"
                />
              </label>
            </div>
            <div className="arrowDiv">
              <label>
                <Field className="fieldLong marg16" as="select" name="driveType">
                  <option value="">Тип приводу</option>
                  {Object.entries(driveType).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
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
                <Field className="fieldLong marg16" as="select" name="transmissionType">
                  <option value="">Коробка передач</option>
                  {Object.entries(transmissionType).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
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
                <Field className="fieldLong marg16" as="select" name="technicalState">
                  <option value="">Технічний стан</option>
                  {Object.entries(technicalState).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
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
                <Field className="fieldLong" as="select" name="color">
                  <option value="">Колір</option>
                  {Object.entries(color).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key}
                    </option>
                  ))}
                </Field>
              </label>
              <div className="arrow">
                <DropArrow />
              </div>
            </div>
          </div>
          <div className="btnWraper">
            {screenWidth > 769 && (
              <button className="clearButton" onClick={clearForm} type="button">
                Очистити все <Arrow />
              </button>
            )}
            <button className="submitButton" type="submit">
              Пошук
            </button>
            {screenWidth < 769 && (
              <button className="clearButton" onClick={clearForm} type="button">
                Очистити все <Arrow />
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </Search>
  );
};
export default SearchForm;
