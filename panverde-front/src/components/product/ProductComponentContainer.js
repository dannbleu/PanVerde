import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UIkit from 'uikit';
import ProductComponent from './ProductComponent';

class ProductComponentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        console.log(this.state)
    }

    render() {

        const { products } = this.state;
        
        return (
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <h1>Productos</h1>
                        <div className="uk-grid-match uk-child-width-1-4" uk-grid="true">
                            {products.map(
                                (product, index) =>
                                    <ProductComponent key={index} {...product} />
                            )
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    componentDidMount() {

        axios.get("http://localhost:3000/api/product/getAll")
            .then(res => {
                const { products } = res.data;
                console.log("aaaaa",res.data);
                this.setState({ products });
        })
    }
};

export default ProductComponentContainer;

