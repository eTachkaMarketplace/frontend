import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyled } from './spinner.styled';


export default function Spinner() {
  return (
    <SpinnerStyled>
      <RotatingLines
        strokeColor={`#00BFFF`}
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerStyled>
  );
}