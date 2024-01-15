import FilterSelect from './FilterSelect';

export default function YearSelect() {
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
