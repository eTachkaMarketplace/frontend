import { CircleSVG } from '../HeroForm/HeroSVG';
import { BlockWrapper } from './Rblock.styled';

export const Rblock = () => {
  return (
    <BlockWrapper>
      <div className="fsblock">
        <div className='allblock'>
            <div className="circle">
              <CircleSVG />
            </div>
            <p className='text'>+10 000 машин</p>
        </div>
      </div>
      <div className="scblock">
        <div className='allblock'>
            <div className="circle">
              <CircleSVG />
            </div>
            <p className='text'>+20 партнерів</p>
        </div>
      </div>
      <div className="thblock">
        <div className='allblock'>
            <div className="circle">
              <CircleSVG />
            </div>
            <p className='text'>+500 продажів на місяць</p>
        </div>
      </div>
    </BlockWrapper>
  );
};
