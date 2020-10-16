import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputvalue, setinputvalue] = useState('')

    const handleInputchange = ( e ) => {
        // console.log(e.target.value);
        setinputvalue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputvalue ) {
            setCategories( cats => [ inputvalue, ...cats ]);
            setinputvalue('');
        }else{
            console.log('No debe ser vacio el input');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputvalue }
                onChange={ handleInputchange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}