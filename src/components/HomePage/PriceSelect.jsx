import FilterInput from './FilterInput';

export default function PriceSelect({ onSelectChange }) {
  return (
    <div className={'flex flex-row gap-6'}>
      <div className={'flex-grow'}>
        <FilterInput name={'priceMin'} nameUser={'Ціна від'} onSelectChange={onSelectChange} />
      </div>
      <div className={'flex-grow'}>
        <FilterInput name={'priceMax'} nameUser={'Ціна до'} onSelectChange={onSelectChange} />
      </div>
    </div>
  );
}
