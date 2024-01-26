import { Wraper } from "./imgModal.styled";


const IMGModal = ({imgSrs}) => {
    return (
      <Wraper>
        <img className="image" src={imgSrs} alt="chosen car" />
      </Wraper>
    );
}
export default IMGModal