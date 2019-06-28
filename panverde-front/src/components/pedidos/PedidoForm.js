import React from 'react';
import DatePicker from 'react-datepicker';

const ProductForm = ({handleChange, handleSubmit, email, date, quantity, error, _id}) => (
    <div>
        <h3>Realiza una cotización</h3>
        <form className="uk-text-left" onSubmit={handleSubmit}>
            <fieldset className="uk-fieldset">

                <div className="uk-margin">
                    <label>email:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="proporciona un email" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Productos:</label>
                    {/* <select className="uk-select" name='products' onChange={handleChange}>
                        < option >Selecciona un producto</option>
                            {ped.length <= 0 ? '' :
                                product.map((data, i) =>
                                < option key={i} value={data._id} >{data.name}</option>
                                )}
                        </select> */}
                </div>

                <div className="uk-margin">
                    <label>Cantidad:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="number"
                        name="quantity"
                        value={quantity}
                    />
                </div>

                <div className="uk-margin">
                    <label>Fecha de entrega:</label>
                    <DatePicker/>
                </div>

            </fieldset>
                <button className="uk-button uk-button-primary">
                Solicitar una cotización
                </button>
        </form>

        {error && (
            <div className="uk-alert-danger uk-margin-small-top" uk-alert="true">
                <p>{error}</p>
            </div>
        )}

    </div>
);

export default ProductForm;