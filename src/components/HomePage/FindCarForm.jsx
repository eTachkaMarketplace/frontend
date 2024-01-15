import GradientButton from '../GradientButton/GradientButton';
import FilterSelect from './FilterSelect';
import YearSelect from './YearSelect';
import PriceSelect from './PriceSelect';
import FloatingAchievement from './FloatingAchievement';

export default function FindCarForm() {
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
