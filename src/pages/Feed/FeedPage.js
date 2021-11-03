import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestPage";
import RestaurantCard, { CardContainer, ScreenContainer } from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const restaurants = useRequestData(
    [],
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants"
  );
  console.log(restaurants);

/*   const onClickCard = (title) => {
    goToEventListDetails(history, title)
    } 
 */
  const restaurantsCards = restaurants.restaurants?.map((restaurant) => {
    return (
      <RestaurantCard
        title={restaurant.name}
        image={restaurant.logoUrl}
        category={restaurant.category}
        /* onClick={() => {onClickCard ()}} */
        
      />
    );
  });
  return (
  <ScreenContainer>
        <CardContainer>
            {restaurantsCards}
        </CardContainer>
  </ScreenContainer>
)};
export default FeedPage;
