import { customSort } from './customSort';
import {expect, jest, test} from '@jest/globals';

test('Sorts ["TH19", "SG20", "TH2"] to ["SG20", "TH2", "TH19"]', () => {
    expect(customSort(["TH19", "SG20", "TH2"])).toEqual(["SG20", "TH2", "TH19"]);
});

test('Sorts ["TH10", "TH3Netflix", "TH1", "TH7"] to ["TH1", "TH3Netflix", "TH7", "TH10"]', () => {
    expect(customSort(["TH10", "TH3Netflix", "TH1", "TH7"])).toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
});
