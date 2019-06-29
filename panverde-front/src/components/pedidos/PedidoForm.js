import React from 'react';
import DatePicker from 'react-datepicker';

const ProductForm = ({handleChangeDate, handleChange, handleSubmit, addItems, email, date, quantity, error, products,selectProduct,handleDylan}) => (
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
                    <label>Fecha de entrega:    </label>
                    <DatePicker
                        showTimeSelect="true"
                        onChange={handleChangeDate}
                        name="date"
                        value={date}
                    />
                </div>

                <div className="uk-margin">
                    <label>Productos:</label>
                    <select className="uk-select" name='_id' onChange={handleChange} value={selectProduct}>
                        < option value="0" >Selecciona un producto</option>
                            {products.length <= 0 ? '' :
                                products.map((data, i) =>
                                < option key={i} value={i} >{data.name}</option>
                                )}
                        </select>
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

                

            </fieldset>
            <button className="uk-button uk-button-primary"
            onClick={addItems}>
                Añadir Productos   
                </button>
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