import React from 'react';
import { Link } from 'react-router-dom';


const HomeSliderComponent=({src,alt,description,route})=> (
            <li>
                <img src={src} alt={alt} uk-cover='true' />
                <div className="uk-position-center uk-position-small uk-text-center">
                      <Link to={`${route}`}><h1 className="uk-heading-large"uk-slideshow-parallax="x: 100,-100">{alt} </h1></Link>
                      <p uk-slideshow-parallax="x: 200,-200">{description}</p>
                      
                  </div>
              </li>
        );

export default HomeSliderComponent;