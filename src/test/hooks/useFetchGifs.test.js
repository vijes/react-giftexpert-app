import React from 'react';
import '@testing-library/jest-dom';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook: useFetchGifs', () => {

    test('Debe de retornar el valor inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball Z' ) );
        console.log(result.current);
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('debe de retoornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball Z' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
});
