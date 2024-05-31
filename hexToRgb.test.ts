import { hexToRgb } from './hexToRgb';
import {expect, jest, test} from '@jest/globals';

test('Converts #FF9933 to { r: 255, g: 153, b: 51 }', () => {
    expect(hexToRgb("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
});

test('Converts #FFF to { r: 255, g: 255, b: 255 }', () => {
    expect(hexToRgb("#FFF")).toEqual({ r: 255, g: 255, b: 255 });
});

test('Converts #000 to { r: 0, g: 0, b: 0 }', () => {
    expect(hexToRgb("#000")).toEqual({ r: 0, g: 0, b: 0 });
});
