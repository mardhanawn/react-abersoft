import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'

import HomePage from './HomePage'
import RegisterPage from './RegisterPage/registerPage'
import LoginPage from './LoginPage/loginPage'
import OnboardingPage from './OnboardingPage/onboardingPage'

function Pages() {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact render={props => <HomePage {...props} />} />
                <Route path="/register" render={props => <RegisterPage {...props} />} />
                <Route path="/login" render={props => <LoginPage {...props} />} />
                <Route path="/onboarding" render={props => <OnboardingPage {...props} />} />
            </BrowserRouter>
        </>
    )
}

export default Pages
