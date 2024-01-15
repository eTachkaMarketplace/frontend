export default function FilterInput({ name }) {
  return (
    <input
      className="text-gray-300 block bg-white bg-opacity-15 p-4 focus:outline-none focus:border-indigo-400
      hover:bg-opacity-20 cursor-text w-full rounded"
      style={{ color: '#B9B9B9' }}
      placeholder={name}
    />
  );
}
