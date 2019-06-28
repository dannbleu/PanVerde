import React, { Component } from 'react';
import { ShowCategory } from '../../services/category';

class Categoryform extends Component {
    state = { 
        category: []
    };
    componentWillMount() {
        ShowCategory().then(r=> this.setState({category:r.category})).catch(err => console.log('err', err))
       
    }

           
    render() {
        let { category } = this.state
        return (
            <div>
                <h1>
                    Crea Categoria
                </h1>
                <form>
                    <div className="uk-align-center">
                        <div className="uk-margin">
                            <div className="uk-inline">
                                <a className="uk-form-icon" href="#" uk-icon="icon: pencil">a</a>
                                <label>Crear Categoria
                                    <input className="uk-input" type="text">                             
                                </input></label>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-inline">
                                <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link">a</a>
                                <label>Modificar Categoria
                                    <input className="uk-input" type="text"></input>
                                </label>
                                
                            </div>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <select class="uk-select">
                        < option >Selecciona una categoria</option>
                            {category.length <= 0 ? '' :
                                category.map((data, i) =>
                                < option key={i} >{data.category}</option>
                                )}
                        </select>
                    </div>

                </form>
            </div>
        );
    }
}

export default Categoryform;