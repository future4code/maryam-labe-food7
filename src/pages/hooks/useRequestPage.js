import {useEffect, useState} from "react"
import axios from "axios"

const token = localStorage.getItem("token")

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get( url, {
            headers: {
                Auth: token
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log (err)
        })
    }, [url])
    return (data)
}

export default useRequestData