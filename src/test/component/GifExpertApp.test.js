import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../component/GifExpertApp';

describe('Pruebas con el <GifExpertApp />', () => {

    test('Consumir el componente <GifExpertApp /> correctamente', () => {

        const wrapper = shallow( <GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('debe de mostrar una lista de categorias', () => {

        const categories = ['Dragon ball', 'Dragon Ball Z'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );        
    });
    
    
});