import { autocomplete } from './autocomplete';

describe('autocomplete', () => {
    test('should return correct results with the correct order', () => {
        expect(autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toEqual(["Think", "Mother"]);
    });

    test('should be case insensitive', () => {
        expect(autocomplete("Th", ["mother", "THINK", "worTHy", "Apple", "Android"], 3)).toEqual(["THINK", "mother", "worTHy"]);
    });

    test('should return all results if maxResult is larger than the number of matches', () => {
        expect(autocomplete("an", ["Banana", "candy", "Plane", "Fan", "man"], 10)).toEqual(["Banana", "candy", "Fan", "man", "Plane"]);
    });

    test('should return an empty array if no matches are found', () => {
        expect(autocomplete("zz", ["Banana", "candy", "Plane", "Fan", "man"], 5)).toEqual([]);
    });

    test('should handle empty search string', () => {
        expect(autocomplete("", ["Banana", "candy", "Plane", "Fan", "man"], 5)).toEqual(["Banana", "candy", "Fan", "man", "Plane"]);
    });
});
