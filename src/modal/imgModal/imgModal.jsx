import { Wraper } from "./imgModal.styled";


const IMGModal = ({imgSrs}) => {
    return (
      <Wraper>
        <img src={imgSrs} alt="chosen car" />
      </Wraper>
    );
}
export default IMGModal