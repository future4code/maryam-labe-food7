import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToFeed } from "../Routes/Coordinator"

const useUnProtectedPage = () => {

    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            goToFeed(history)
        }
    }, [history])
}

export default useUnProtectedPage