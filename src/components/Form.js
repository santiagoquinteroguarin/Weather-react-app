import React, {useState} from 'react';
import Error from './Error';

const Form = ({search, setSavedSearch, setSavedQuery}) => {

    // ?5.
    const [error, setSavedError] = useState(false);

    // ?2. extract
    const { city, country } = search;

    // ?3. coloca los elementos en el state
    const handleChange = e => {
        // ?4. update state
        setSavedSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    // ?4.
    const handleSubmit = e => {
        e.preventDefault();

        // ?5. validation
        if(city.trim() === '' || country.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // ?6. send to main component
        setSavedQuery(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {error ? <Error message="Ambos campos son obligatorios"/> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />

                <label htmlFor="city">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>

                <label htmlFor="country">País: </label>
            </div>
            
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

export default Form;