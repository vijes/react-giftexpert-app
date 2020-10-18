import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    // const [categories, setCategories] = useState(['Samurai X']);
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     setCategories( ['Dragon Ball GT', ...categories] );
    //     // setCategories( cats => [ ... cats, 'Dagon Ball GT']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;