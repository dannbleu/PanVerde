import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import imageLoader from './menuImages';



class menu extends Component {

    state = {
        images: []
    }
    
    componentDidMount() {
        const images = imageLoader()
        this.setState({ images });
        console.log("estado", images);
    }
    render() {
        const { images } = this.state;
        console.log("el render menu", this.state)
        
        return (
            

            <div className="uk-section">
                <div uk-grid="true" className="uk-align-center">
                    {images.map(({ id, src, alt }) =>
                        <img key={id} src={src} alt={alt}></img>
                    )}
                </div>
            </div>
            
        );
    }
}

export default menu;