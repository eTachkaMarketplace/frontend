import FilterInput from './FilterInput';

export default function PriceSelect() {
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
