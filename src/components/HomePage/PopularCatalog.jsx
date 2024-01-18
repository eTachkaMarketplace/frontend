import { useDispatch, useSelector } from 'react-redux';
import { selectAdverstisements } from '../../redux/advertisment/selectors';
import { useEffect } from 'react';
import { getAdverstisements } from '../../redux/advertisment/operations';
import AdvertisementSection from './AdvertisementSection';
import AdvertisementCard from './AdvertisementCard';

export default function PopularCatalog() {
  const dispatch = useDispatch();
  const advertisements = useSelector(selectAdverstisements).slice(0, 3);

  useEffect(() => {
    dispatch(getAdverstisements({ size: 3, page: 0 }));
  }, [dispatch]);

  return (
    <AdvertisementSection name={'Популярні'}>
      <div className={'flex flex-col md:flex-row gap-6'}>
        {advertisements.map((advertisement, _) => (
          <AdvertisementCard key={advertisement.id} data={advertisement} />
        ))}
      </div>
    </AdvertisementSection>
  );
}
