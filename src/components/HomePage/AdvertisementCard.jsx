import { Link } from 'react-router-dom';
import { Favorit } from '../SearchList/SearchListSVG';
import {  FavoritFilled } from '../HomePage/AdvertisementCardSVG';

export default function AdvertisementCard({ data, isFavorite, toggleFavorite }) {
  const { car } = data;
  return (
    <div className="relative">
      <Link
        to={`/AdvertisementByID/${data.id}`}
        className="flex flex-col flex-1 p-4 gap-3 cursor-pointer bg-blue-50 border-2 border-transparent hover:border-blue-200 rounded transition duration-300"
      >
        <img
          className="rounded-lg aspect-preview w-full h-full object-cover"
          src={data.previewImage}
          alt="Advertisement Preview"
        />
        <div>
          <h4 className="text-lg font-semibold">
            {car.brand} {car.model} {car.year}
          </h4>
          <div className="flex flex-row justify-between items-center">
            <p>$ {car.price}</p>
            <p className="text-sm">{data.region}</p>
          </div>
        </div>
      </Link>
      <button
        className="bg-transparent border-0 absolute top-7 right-7"
        type="button"
        onClick={toggleFavorite} 
      >
        {isFavorite ? <FavoritFilled /> : <Favorit />}
      </button>
    </div>
  );
}
