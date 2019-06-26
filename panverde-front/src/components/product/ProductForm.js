import React from 'react';

const ProductForm = ({handleChange, handleSubmit, name, category, error, _id}) => (
    <div>
        <h3>Agrega un Producto</h3>
        <form className="uk-text-left" onSubmit={handleSubmit}>
            <fieldset className="uk-fieldset">

                <div className="uk-margin">
                    <label>Nombre:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="text"
                        name="name"
                        value={name}
                        placeholder="todo" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Category:</label>
                    <select class="uk-select" name='category' onChange={handleChange}>
                        < option >Selecciona una categoria</option>
                            {category.length <= 0 ? '' :
                                category.map((data, i) =>
                                < option key={i} value={data._id} >{data.category}</option>
                                )}
                        </select>
                </div>

            </fieldset>
            <button className="uk-button uk-button-primary">
            {_id ? "Editar" : "Agregar"} Todo
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