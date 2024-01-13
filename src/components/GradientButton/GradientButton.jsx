import styles from './GradientButton.module.scss';

export default function GradientButton({ children }) {
  return (
    <button
      className={`${styles.gradientButton} text-white text-xl font-semibold rounded-md p-3 w-full`}
    >
      {children}
    </button>
  );
}
