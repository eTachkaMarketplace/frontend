import heroBg from '../../images/HomePage/hero_bg.webp';
import FindCarForm from './FindCarForm';

export default function Hero() {
  return (
    <section className={'py-12 bg-cover bg-right-bottom'} style={{ backgroundImage: `url(${heroBg})` }}>
      <FindCarForm />
    </section>
  );
}
