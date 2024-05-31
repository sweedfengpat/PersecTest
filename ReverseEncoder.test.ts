import { ReverseEncoder } from './ReverseEncoder';
import {expect, jest, test} from '@jest/globals';

describe('ReverseEncoder', () => {
    let reverseEncoder: ReverseEncoder;

    beforeEach(() => {
        reverseEncoder = new ReverseEncoder();
    });

    test('encode should encode the string correctly', () => {
        expect(reverseEncoder.encode("hello world")).toBe("dliow svool");
        expect(reverseEncoder.encode("abc xyz")).toBe("cba zyx");
    });

    test('decode should decode the string correctly', () => {
        expect(reverseEncoder.decode("dliow svool")).toBe("hello world");
        expect(reverseEncoder.decode("cba zyx")).toBe("abc xyz");
    });

    test('encode and decode should be reversible', () => {
        const original = "This is a test string";
        const encoded = reverseEncoder.encode(original);
        const decoded = reverseEncoder.decode(encoded);
        expect(decoded).toBe(original);
    });
});
