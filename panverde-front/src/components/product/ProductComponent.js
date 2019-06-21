import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ProductComponent = ({name, description, price, stock, images, category}) => (
    <div>
        <figure className="snip1529"><img src={images} alt={name} />
            <div className="date"><span className="day">{price}</span></div>
                <figcaption>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </figcaption>
            <div className="hover"><i className="ion-android-open"></i></div>
                <a href="#"></a>
        </figure>
        {/* <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
            <div className="uk-inline">
            <img src={images} alt={name} />
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <h3 className="uk-margin-remove">{name}</h3>
                <p className="uk-margin-remove"></p>
            </div>
        </div>
                    
        </div>
            <div className="uk-card-body uk-padding-small">
            <table className="uk-table uk-table-divider uk-table-justify uk-table-middle">
            {Object.keys(props).map((key, index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{props[key] ? props[key]: '-'}</td>
                        </tr>
                    ))}
            </table>
            </div>
            <div className="uk-card-footer uk-text-left">
                <Link to='/product-form' className="uk-button uk-button-text">Detalle</Link>
            </div>
        </div> */}
    </div>
)

export default ProductComponent;