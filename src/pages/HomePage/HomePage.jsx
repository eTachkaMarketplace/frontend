import Hero from '../../components/HomePage/Hero';
import PopularCatalog from '../../components/HomePage/PopularCatalog';
import NewCatalog from '../../components/HomePage/NewCatalog';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { useEffect } from 'react';

export default function HomePage({ favorites ,setFavorites}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsOpen(false));
 },[dispatch])

  return (
    <>
      <Hero />
      <PopularCatalog favorites={favorites} setFavorites={setFavorites}/>
      <NewCatalog favorites={favorites} setFavorites={setFavorites}/>
    </>
  );
}

