import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverstisements } from '../../redux/advertisment/selectors';
import { getAdverstisements } from '../../redux/advertisment/operations';
import AdvertisementSection from './AdvertisementSection';
import AdvertisementCard from './AdvertisementCard';
import Pagination from '../Pagination/Pagination';
import { nanoid } from '@reduxjs/toolkit';

export default function NewCatalog() {
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages] = useState(1);
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements);
  const firstList = advertisements.slice(0, 3);
  const secondList = advertisements.slice(3, 6);

  useEffect(() => {
    dispatch(getAdverstisements({ size: 6, page: pageIndex }));
  }, [dispatch, pageIndex]);

  return (
    <AdvertisementSection name={'Нові оголошення'}>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {firstList.map((advertisement, _) => (
          <AdvertisementCard key={advertisement.id} data={advertisement} />
        ))}
      </div>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {secondList.map((advertisement, _) => (
          <AdvertisementCard key={advertisement.id} data={advertisement} />
        ))}
      </div>
      <div className={'flex flex-row justify-center py-6'}>
        <Pagination totalPages={totalPages} pageIndex={pageIndex} onPageChange={page => setPageIndex(page)} />
      </div>
    </AdvertisementSection>
  );
}
