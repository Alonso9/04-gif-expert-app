import React from 'react'
import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
    const [inputvalue, setInputvalue] = useState('');
    // const onInputChange = (event) => {
    //     console.log(event.target.value);
    //     setInputvalue( event.target.value);
    // }
    // Igual de la primera pero destructurando el event
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputvalue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputvalue.trim().length <= 1) return;
        // SetCategories(newCategory => [...newCategory, inputvalue])
        onNewCategory( inputvalue.trim()); //Solo si el valor es mayor a 1 caracter 
        setInputvalue('');
    }
  return (
    // <></> quitamos esto porque el form actua como un unico contenedor padre
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
        placeholder='Search Category'
        maxLength={150}
        value={inputvalue}
        onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
