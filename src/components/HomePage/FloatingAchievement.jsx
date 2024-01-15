export default function FloatingAchievement({ children, className }) {
  return (
    <div className={`absolute bg-white bg-opacity-15 px-8 py-4 rounded ${className}`}>
      <p className={'text-2xl text-white'}>{children}</p>
      <div className={'absolute -left-3 -top-3'}>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="4.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="10.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="10" stroke="white" strokeOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="15.5" fill="white" fillOpacity="0.13" />
          <circle cx="15.5" cy="15.5" r="15" stroke="white" strokeOpacity="0.13" />
        </svg>
      </div>
    </div>
  );
}
