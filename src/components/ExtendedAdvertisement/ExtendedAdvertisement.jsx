import { useSelector } from "react-redux"
import { selectAdverstisementsID } from "redux/advertisment/selectors";

export const ExtendedAdvertisement = () => {
const Advertisement = useSelector(selectAdverstisementsID);
console.log("🚀 ~ ExtendedAdvertisement ~ Advertisement:", Advertisement)


    return <>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </>
}