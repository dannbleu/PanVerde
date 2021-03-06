import React from 'react';

const ProductComponent = ({name, description, price, stock, images, category, user}) => (
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
    </div>
)

export default ProductComponent;