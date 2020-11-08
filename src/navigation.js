import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import Activities from "./Pages/Activities"
import Archive from "./Pages/Archive"
import Contacts from "./Pages/Contacts"
import CurrentProjects from "./Pages/CurrentProjects"
import ErrorPage from "./Pages/ErrorPage"
import FinishedProjects from "./Pages/FinishedProjects"
import Gallery from "./Pages/Gallery"
import ManagementBoard from "./Pages/ManagementBoard"
import PrivacyAndDataProtectionPolicy from "./Pages/PrivacyAndDataProtectionPolicy"
import Reports from "./Pages/Reports"
import News from "./Pages/News"

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/aboutus" exact component={AboutUs}/>
                    <Route path="/activities" exact component={Activities}/>
                    <Route path="/archive" exact component={Archive}/>
                    <Route path="/contacts" exact component={Contacts}/>
                    <Route path="/current-projects" exact component={CurrentProjects}/>
                    <Route path="/finished-projects" exact component={FinishedProjects}/>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/management-board" exact component={ManagementBoard}/>
                    <Route path="/Privacy-and-data-protection-policy" exact component={PrivacyAndDataProtectionPolicy}/>
                    <Route path="/reports" exact component={Reports}/>
                    <Route path="/*" exact component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Navigation
