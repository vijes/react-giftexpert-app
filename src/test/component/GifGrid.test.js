import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../component/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas para componente <GifGrid />', () => {

    const category = 'Dragon Ball Z';
    
    test('Se debe consumir el componente y generar el snapshot.', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes con useFetfchGifs()', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://localhost:/imag',
            title: 'Imagen prueba'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category }/> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });
    
    
    
});