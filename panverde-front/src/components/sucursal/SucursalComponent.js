import React, {useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';


export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 19.390846,
        longitude: -99.164779,
        width: "100vw",
        height: "100vh",
        zoom: 13
    });

    return (
        <div>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZGFubmJsZXUiLCJhIjoiY2p4Nzd2NjE3MDdraTN5bWpsaDRtODAyaiJ9.E_t0XNhrq7xdClrW9JaGww"
                mapStyle="mapbox://styles/dannbleu/cjx799kpq0ls61cry2xsujbc0"
                nViewportChange={viewport => {
                setViewport(viewport)
            }}>
                markers here
            </ReactMapGl>
        </div>
        
    );    
}

    
