import React from "react"
import useRequestData from "../../hooks/useRequestData"
import ActionAreaCard from "./styled"


const FeedPage = () => {
    const restaurants = useRequestData([],"https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants")
    console.log (restaurants)
    return(
        <div>
            <h1>FeedPage</h1>
            <ActionAreaCard
            
            />
        </div>
    )
}


export default FeedPage 