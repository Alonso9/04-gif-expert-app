// import React from 'react'
import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid"
export const GifExpertApp = () => {
  const [categories, SetCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    // SetCategories(newCategory => [...newCategory, 'New Category'])
    // SetCategories([...categories, 'New Catregory'])
    if(categories.includes(newCategory)) return;

    SetCategories([...categories, newCategory])
    // console.log(newCategory)
  }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        {/* <AddCategory SetCategories={ SetCategories}/> */}
        <AddCategory onNewCategory={ (value) => onAddCategory(value)}/>
        {/* Lista de tarjetas */}
          {
            categories.map( (category, index) => (
              <GifGrid 
                key={category}
                category={category}
              />
            ))
          }
    </>
  )
}
