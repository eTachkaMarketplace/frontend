import heroBg from '../../images/HomePage/hero_bg.webp';
import GradientButton from '../../components/GradientButton/GradientButton';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverstisements } from '../../redux/advertisment/selectors';
import { getAdverstisements } from '../../redux/advertisment/operations';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularCatalog />
      <NewCatalog />
    </>
  );
}

function Hero() {
  return (
    <section className={'py-12 bg-cover bg-right-bottom'} style={{ backgroundImage: `url(${heroBg})` }}>
      <FindCarForm />
    </section>
  );
}

function NewCatalog() {
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements);
  const firstList = advertisements.slice(0, 3);
  const secondList = advertisements.slice(3, 6);

  useEffect(() => {
    dispatch(getAdverstisements({ size: 6, page: pageIndex }));
  }, [dispatch]);

  return (
    <AdvertisementSection name={'Нові оголошення'}>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {firstList.map((advertisement, _) => (
          <AdvertisementCard data={advertisement} />
        ))}
      </div>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {secondList.map((advertisement, _) => (
          <AdvertisementCard data={advertisement} />
        ))}
      </div>
      <div className={'flex flex-row justify-center py-6'}>
        <Pagination totalPages={totalPages} pageIndex={pageIndex} onPageChange={page => setPageIndex(page)} />
      </div>
    </AdvertisementSection>
  );
}

function PopularCatalog() {
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements).slice(0, 3);

  useEffect(() => {
    dispatch(getAdverstisements({ size: 3, page: 0 }));
  }, [dispatch]);

  return (
    <AdvertisementSection name={'Популярні'}>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {advertisements.map((advertisement, _) => (
          <AdvertisementCard data={advertisement} />
        ))}
      </div>
    </AdvertisementSection>
  );
}

function AdvertisementSection({ name, children }) {
  return (
    <section className="mx-4 py-8 xl:mx-auto flex flex-col items-center">
      <div className={'xl:max-2xl:mx-4 space-y-4 w-full max-w-screen-xl'}>
        <h2 className={'text-2xl font-semibold'}>{name}</h2>
        {children}
      </div>
    </section>
  );
}

function AdvertisementCard({ data }) {
  const { car } = data;

  return (
    <div
      className="flex flex-col flex-1 p-4 gap-3 cursor-pointer bg-blue-50 border-2 border-transparent
    hover:border-blue-200 rounded transition duration-300 "
    >
      <img
        className={'rounded-lg aspect-preview w-full h-full object-cover'}
        src={data.previewImage}
        alt={'Advertisement Preview Image'}
      />
      <div>
        <h4 className={'text-lg font-semibold'}>
          {car.brand} {car.model} {car.year}
        </h4>
        <div className={'flex flex-row justify-between items-center'}>
          <p>$ {car.price}</p>
          <p className={'text-sm'}>{data.region}</p>
        </div>
      </div>
    </div>
  );
}

function FindCarForm() {
  return (
    <div className={'mx-4 xl:mx-auto max-w-screen-xl flex flex-row justify-center xl:justify-start'}>
      <div className={'xl:max-2xl:mx-4 max-w-lg text-white flex flex-col bg-black bg-opacity-70 p-8 rounded-2xl gap-8'}>
        <h1 className={'text-2xl font-semibold'}>Знайти автомобіль</h1>
        <div className={'flex flex-col gap-6'}>
          <FilterSelect name={'Марка'} options={['BMW', 'Volkswagen']}></FilterSelect>
          <FilterSelect name={'Модель'} options={['X5', 'Golf']}></FilterSelect>
          <FilterSelect name={'Область'} options={['Київ', 'Львів']}></FilterSelect>
          <YearSelect />
          <PriceSelect />
        </div>
        <div className={'flex flex-row gap-6'}>
          <div className={'flex-grow flex flex-col justify-center'}>
            <a href={'/search'} className={'text-xl underline underline-offset-4 decoration-1'}>
              Розширений пошук
            </a>
          </div>
          <div className={'flex-grow'}>
            <GradientButton>Пошук</GradientButton>
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

function PriceSelect() {
  return (
    <div className={'flex flex-row gap-6'}>
      <div className={'flex-grow'}>
        <FilterInput name={'Ціна від'} />
      </div>
      <div className={'flex-grow'}>
        <FilterInput name={'Ціна до'} />
      </div>
    </div>
  );
}

function YearSelect() {
  return (
    <div className={'flex flex-row gap-6'}>
      <div className={'flex-grow'}>
        <FilterSelect name={'Рік від'} options={['2000', '2001']}></FilterSelect>
      </div>
      <div className={'flex-grow'}>
        <FilterSelect name={'Рік до'} options={['2000', '2001']}></FilterSelect>
      </div>
    </div>
  );
}

function FloatingAchievement({ children, className }) {
  return (
    <div className={`absolute bg-white bg-opacity-15 px-8 py-4 rounded ${className}`}>
      <p className={'text-2xl text-white'}>{children}</p>
      <div className={'absolute -left-3 -top-3'}>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="4.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="10.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="10" stroke="white" strokeOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="15.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="15" stroke="white" strokeOpacity="0.13" />
        </svg>
      </div>
    </div>
  );
}

function FilterInput({ name }) {
  return (
    <input
      className="text-gray-300 block bg-white bg-opacity-15 p-4 focus:outline-none focus:border-indigo-400
      hover:bg-opacity-20 cursor-text w-full rounded"
      style={{ color: '#B9B9B9' }}
      placeholder={name}
    />
  );
}

function FilterSelect({ name, options }) {
  return (
    <div className={'relative'}>
      <select
        className="text-gray-300 block bg-white bg-opacity-15 appearance-none p-4 focus:outline-none
        hover:bg-opacity-20 cursor-pointer w-full"
        style={{ color: '#B9B9B9' }}
      >
        <option disabled selected>
          {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={'absolute right-5 top-6 z-0'}>
        {/* Dropdown Icon */}
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.9987 7.50016L0.332031 0.833496H13.6654L6.9987 7.50016Z" fill="#141414" fillOpacity="0.7" />
        </svg>
      </div>
    </div>
  );
}
