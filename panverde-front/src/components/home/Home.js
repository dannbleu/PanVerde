import React, { Component } from "react";
import home from './Home.json';
import '../../App.css';
import HomeSliderComponent from "./HomeSliderComponent";

class Home extends Component{
    render() {
        //console.log('asdasd',home)
        // salado https://images.unsplash.com/photo-1550599112-0c21a831f6b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80
        // dulce https://images.unsplash.com/photo-1533893057902-dbc94f18f01f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80

        return (
            <div className="uk-section uk-section-muted uk-padding-small uk-padding-remove-left uk-padding-remove-right ">
                <div className="uk-container uk-container-large">
                    <div
                        className="uk-position-relative uk-visible-toggle uk-light"
                        tabIndex="-1"
                        uk-slideshow='animation:fade autoplay-interval:3000 pause-on-hover'
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