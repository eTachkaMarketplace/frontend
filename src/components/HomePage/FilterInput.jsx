export default function FilterInput({ name, nameUser, onSelectChange }) {

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    onSelectChange(name, selectedValue);
  };
  return (
    <input
      name={name}
      onChange={handleSelectChange}
      className="text-gray-300 block bg-white bg-opacity-15 p-4 focus:outline-none focus:border-indigo-400
      hover:bg-opacity-20 cursor-text w-full rounded"
      style={{ color: '#B9B9B9' }}
      placeholder={nameUser}
    />
  );
}
