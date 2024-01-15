export default function AdvertisementSection({ name, children }) {
  return (
    <section className="mx-4 py-8 xl:mx-auto flex flex-col items-center">
      <div className={'xl:max-2xl:mx-4 space-y-4 w-full max-w-screen-xl'}>
        <h2 className={'text-2xl font-semibold'}>{name}</h2>
        {children}
      </div>
    </section>
  );
}
