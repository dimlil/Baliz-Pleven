import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/aboutus" exact component={AboutUs}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Navigation
