const sum = require('./sum');
import reverseString from './index';
import capitalizeString from './capitalize';
import calculator from './calculator';
import caesarCipher from './caesar';
import analyzeArray from './object-arrai';

test('adds 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('capitalize first letter of string', () => {
    expect(capitalizeString('john')).toBe('John')
});

test('To reverse strings', () => {
    expect(reverseString('Sara')).toEqual('araS')
});

test('calculate an addition number', () => {
    expect(calculator.add(2, 3)).toBe(5)
});

test('calculate subtraction', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
});

test('calculate divide', () => {
    expect(calculator.divide(15, 3)).toBe(5)
});

test('calculate multiplycation', () => {
    expect(calculator.multiply(5, 3)).toBe(15)
});

test('caesar criptograph', () => {
    expect(caesarCipher('Este e um projeto de desenvolvimento web com js'))
        .toEqual('TNOZ/Z/PH/KMJEZOJ/YZ/YZNZIQJGQDHZIOJ/RZW/XJH/EN')
});

test('Array to object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})
