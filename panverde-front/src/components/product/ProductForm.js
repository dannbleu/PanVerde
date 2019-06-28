import React from 'react';

const ProductForm = ({handleChange, handleSubmit, name, category, images, description, price, error, _id}) => (
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
                        placeholder="Nombre del producto" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Foto:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="file"
                        name="images"
                        value={images}
                        multiple
                    />
                    
                </div>

                <div className="uk-margin">
                    <label>Descripcion:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Agregue una descripcion" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Precio:</label>
                    <input
                        onChange={handleChange}
                        className={`uk-input ${error ? 'uk-form-danger' : '' }`} 
                        type="number"
                        name="price"
                        value={price}
                        placeholder="$$" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Categoría:</label>
                    <select className="uk-select" name='category' onChange={handleChange}>
                        < option >Selecciona una categoría</option>
                            {category.length <= 0 ? '' :
                                category.map((data, i) =>
                                < option key={i} value={data._id} >{data.category}</option>
                                )}
                        </select>
                </div>

            </fieldset>
            <button className="uk-button uk-button-primary">
            {_id ? "Editar" : "Agregar"} Producto
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