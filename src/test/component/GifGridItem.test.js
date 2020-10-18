import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../component/GifGridItem';


describe('Pruebas de GifGridItem', () => {
    
    const title = 'Titulo test';
    const url = 'https://localhost:3000/icon.jpg/';
    let wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    beforeEach( () => {
        wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    });

    test('debe de mostrar el componente correctamente', () => {
        // const wrapper = shallow(<GifGridItem />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    });

    test('debe de obtener la imagen igual al url y alt de los props.', () => {

        const img = wrapper.find('img');
        // console.log( img.props() );
        // console.log( img.prop('src') );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
    });
    
    test('debe tener el class name animate__swing', () => {
        
        const div = wrapper.find('div');
        const className = div.prop( 'className' );

        expect( className.includes( 'animate__swing' ) ).toBe( true );
    })
        
    
})
