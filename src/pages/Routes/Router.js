import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import FeedPage from "../Feed/FeedPage";
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../SignUp/SignUpPage";
import ProfilePage from "../Profile/ProfilePage";
import CartPage from "../Cart/CartPage";


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/">

                        <LoginPage/>

                </Route>

                <Route exact path = "/signup">

                        <SignUpPage />

                </Route>

                <Route exact path = "/feed">

                        <FeedPage />

                </Route>

                <Route exact path = "rappi4C/profile">

                        <ProfilePage />

                </Route>

                 <Route exact path = "/cart">

                        <CartPage />

                </Route>

                <Route >

                        <ErrorPage />

                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router 