import React from 'react'
import configureStore from './store/store'
import ReactDOM from 'react-dom'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            login: {
                currentUser: window.currentUser
            },
            signup: {
                [window.currentUser.id]: window.currentUser
            }

        };
    }
    const store = configureStore(preloadedState);
    const root = document.getElementById("root")

    ReactDOM.render(<Root store={store}/>, root)
})