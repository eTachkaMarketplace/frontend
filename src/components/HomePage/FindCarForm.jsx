import GradientButton from '../GradientButton/GradientButton';
import FilterSelect from './FilterSelect';
import YearSelect from './YearSelect';
import PriceSelect from './PriceSelect';
import FloatingAchievement from './FloatingAchievement';
import { useEffect, useState } from 'react';
import DataAccessor from 'components/Class/DataAccessor';

export default function FindCarForm() {
  const dataAccessor = new DataAccessor();
  const carMark = dataAccessor.getModels();
  const [valueSea, setValueSea] = useState({
    brand: '',
    model: '',
    region: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
  });
  const [availableModels, setAvailableModels] = useState([]);

const handleSelectChange = (name, selectedValue) => {
  if (name === 'brand') {
    const modelsForSelectedBrand = carMark[selectedValue] || [];
    setAvailableModels(modelsForSelectedBrand);
  }

  setValueSea(prevValues => ({
    ...prevValues,
    [name]: selectedValue,
  }));
};

useEffect(() => {
  console.log(valueSea);
}, [valueSea]);

  return (
    <div className={'mx-4 xl:mx-auto max-w-screen-xl flex flex-row justify-center xl:justify-start'}>
      <div className={'xl:max-2xl:mx-4 max-w-lg text-white flex flex-col bg-black bg-opacity-70 p-8 rounded-2xl gap-8'}>
        <h1 className={'text-2xl font-semibold'}>Знайти автомобіль</h1>
        <div className={'flex flex-col gap-6'}>
          <FilterSelect
            name={'brand'}
            nameUser={'Марка'}
            options={['BMW', 'Toyota', 'Mercedes-Benz']}
            onSelectChange={handleSelectChange}
          ></FilterSelect>
          <FilterSelect
            name={'model'}
            nameUser={'Модель'}
            options={availableModels}
            onSelectChange={handleSelectChange}
          ></FilterSelect>
          <FilterSelect
            name={'region'}
            nameUser={'Область'}
            options={[
              'Київська',
              'Вінницька',
              'Волинська',
              'Дніпропетровська',
              'Донецька',
              'Житомирська',
              'Закарпатська',
              'Запорізька',
              'Івано-Франківська',
              'Кіровоградська',
              'Луганська',
              'Львівська',
              'Миколаївська',
              'Одеська',
              'Полтавська',
              'Рівенська',
              'Сумська',
              'Тернопільська',
              'Черкаська',
              'Чернівецька',
              'Чернігівська',
              'Харківська',
              'Херсонська',
              'Хмельницька',
            ]}
            onSelectChange={handleSelectChange}
          ></FilterSelect>
          <YearSelect onSelectChange={handleSelectChange} />
          <PriceSelect onSelectChange={handleSelectChange} />
        </div>
        <div className={'flex flex-row gap-6'}>
          <div className={'flex-grow flex flex-col justify-center'}>
            <a href={'/search'} className={'text-xl underline underline-offset-4 decoration-1'}>
              Розширений пошук
            </a>
          </div>
          <div className={'flex-grow'}>
            <GradientButton>
              <a
                className="w-full h-full block"
                href={`/search?brand=${valueSea.brand}&model=${valueSea.model}&region=${valueSea.region}&yearMin=${valueSea.yearMin}&yearMax=${valueSea.yearMax}&priceMin=${valueSea.priceMin}&priceMax=${valueSea.priceMax}`}
              >
                Пошук
              </a>
            </GradientButton>
          </div>
        </div>
      </div>
      <div className={'relative flex-grow hidden lg:block'}>
        <FloatingAchievement className={'left-24 top-16'}>+10 000 машин</FloatingAchievement>
        <FloatingAchievement className={'right-2 top-40'}>+20 партнерів</FloatingAchievement>
        <FloatingAchievement className={'left-36 bottom-12'}>+500 продажів на місяць</FloatingAchievement>
      </div>
    </div>
  );
}
