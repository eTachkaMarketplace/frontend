export default function FilterSelect({ name, nameUser, options, onSelectChange }) {
  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    onSelectChange(name, selectedValue);
  };
  return (
    <div className={'relative'}>
      <select
        name={name}
        onChange={handleSelectChange}
        defaultValue=""
        className="text-gray-300 block bg-white bg-opacity-15 appearance-none p-4 focus:outline-none
        hover:bg-opacity-20 cursor-pointer w-full"
        style={{ color: '#B9B9B9' }}
      >
        <option disabled value="">
          {nameUser}
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
