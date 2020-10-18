import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../component/AddCategory';
import '@testing-library/jest-dom'

describe('Pruebas en componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });

    test('debe mostrarse correctamente', () => {

       expect( wrapper ).toMatchSnapshot(); 
        
    });

    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola mundo, test Victor';
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('no debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();        
    });

    test('debe de llamar el setcatgories y limpiar la caja de texto. ', () => {

        const value = 'Hola mundo, test completa';
        wrapper.find('input').simulate('change', { target: { value } });
        // console.log('Inputchange ejecutado: ', wrapper.find('p').text().trim() );

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // console.log('El setCategories debio llamarse al menos una vez');
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // console.log('El input value debe estar vacio ');
        expect( wrapper.find('input').prop('value') ).toBe( '' );
    })
    
});
