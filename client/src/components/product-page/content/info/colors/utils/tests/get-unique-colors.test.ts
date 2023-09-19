import { getUniqueColors } from '../get-unique-colors';

describe('getUniqueColors', () => {
    it('should return correct result', () => {
        const images = [
            { color: 'Blue', id: 1, url: '' },
            { color: 'Blue', id: 2, url: '' },
            { color: 'White', id: 3, url: '' },
        ];

        const result = {
            Blue: '',
            White: '',
        };

        expect(getUniqueColors(images)).toMatchObject(result);
    });

    it('should return empty object', () => {
        expect(getUniqueColors([])).toMatchObject({});
    });
});
