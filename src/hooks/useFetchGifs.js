import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category )=> {
    
    const [state, setState] = useState({
        data: [], 
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then(imgsResponse => {
            setState({
                data: imgsResponse,
                loading: false
            });
        });
    }, [ category ])

    return state; // data del arreglo declarado de un objeto
}