import React, {useState} from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import "../../App.css";


export default function Map({sucursales}) {
    const [viewport, setViewport] = useState({
        latitude: 19.390846,
        longitude: -99.164779,
        width: "100vw",
        height: "100vh",
        zoom: 13
    });
console.log(sucursales)

    return (
        <div>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZGFubmJsZXUiLCJhIjoiY2p4Nzd2NjE3MDdraTN5bWpsaDRtODAyaiJ9.E_t0XNhrq7xdClrW9JaGww"
                mapStyle="mapbox://styles/dannbleu/cjx799kpq0ls61cry2xsujbc0"
                onViewportChange={viewport => {
                    setViewport(viewport);
            }}>
                {sucursales.length ? sucursales.map((data, i) =>
                    <Marker
                        key={i}
                        latitude={data.position.coordinates[0]}
                        longitude={data.position.coordinates[1]}
                        offsetLeft={-20}
                        offsetTop={-10}>
                        <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/1008021/images/6285930/Webp.net-resizeimage.jpg"
                            alt="mapita"></img>
                    </Marker>): ''}
            </ReactMapGl>
        </div>
        
    );    
}

    
