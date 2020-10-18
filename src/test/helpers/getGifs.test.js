import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

    test('debe traer diez elementos', async() => {

        const gifs = await getGifs('Dragon Ball Z');
        
        expect( gifs.length ).toBe(10);
        
    });
    
    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);
    })
    
    
})
