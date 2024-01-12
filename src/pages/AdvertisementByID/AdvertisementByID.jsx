import { ExtendedAdvertisement } from "components/ExtendedAdvertisement/ExtendedAdvertisement"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getAdverstisementsByID } from "redux/advertisment/operations"

export const AdvertisementByID = () => {
    const dispatch = useDispatch()
    const id = useParams()

    useEffect(() => {
        dispatch(getAdverstisementsByID(id));
    },[dispatch, id])
    return (<>
    <ExtendedAdvertisement/>
    </>)
}