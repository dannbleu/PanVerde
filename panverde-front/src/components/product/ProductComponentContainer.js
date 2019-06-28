import React, {Component} from 'react';
import ProductComponent from './ProductComponent';
import { ShowProducts } from '../../services/product';

class ProductComponentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    
    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        ShowProducts().then(res =>

            this.setState({products:res.products})
            ).catch(err=>console.log('err',err))
    }

    render() {

        
        let { products } = this.state;
        console.log('dasdsadasd',products   )

        return (
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <h1>Productos</h1>
                        <div className="uk-grid-match uk-child-width-1-4" uk-grid="true">
                            {products.length >= 1 ? products.map(
                                (product, i) =>
                                    <ProductComponent key={i} {...product} />
                            ) : ''
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }

};

export default ProductComponentContainer;

