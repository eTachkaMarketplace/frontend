import { Notify } from "notiflix";

export default function FilterInput({ name, nameUser, onSelectChange }) {

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    
     if (/^\d+$/.test(selectedValue) && parseInt(selectedValue, 10) <= 1000000) {
       onSelectChange(name, selectedValue);
     } else {
       Notify.warning('Введіть число від 0 до 1 000 000')
     }
  };
  return (
    <input
      type="number"
      name={name}
      onChange={handleSelectChange}
      className="text-gray-300 block bg-white bg-opacity-15 p-4 focus:outline-none focus:border-indigo-400
      hover:bg-opacity-20 cursor-text w-full rounded"
      style={{
        color: '#B9B9B9'}}
      placeholder={nameUser}
      max={10000000}
    />
  );
}
