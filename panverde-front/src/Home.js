import React, { Component } from "react";
import Router from "./Router";
// import NavBar from "./components/common/Navbar";

import Uikit from 'uikit';
import home from './Home.json';
import './App.css';
import HomeSliderComponent from "./HomeSliderComponent";

class Home extends Component{
    render() {
        console.log('asdasd',home)
        return (
            <div class="uk-section uk-section-muted">
                <div class="uk-container uk-container-large">
                    <div
                        className="uk-position-relative uk-visible-toggle uk-light"
                        tabIndex="-1"
                        uk-slideshow='animation:fade'
                    >
                            <ul className="uk-slideshow-items">
                                {home.map((data, i) =>
                                    <HomeSliderComponent key={i} {...data}/>
                                    )}
                            </ul>
                
                        <a
                        className="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous='true'
                        uk-slideshow-item="previous"
                        >
                        {/* <span uk-icon="icon: chevron-left" /> */}
                        </a>
                        <a
                        className="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next='true'
                        uk-slideshow-item="next"
                        >
                        {/* <span uk-icon="icon: chevron-right" /> */}
                        </a>
                    </div>
                </div>
            </div>
 
        
        )
    }
}

export default Home;