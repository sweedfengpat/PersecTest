export function customSort(arr: string[]): string[] {
    return arr.sort((a, b) => {
        const regex = /^([A-Za-z]+)(\d+)/;
        const aMatch = a.match(regex);
        const bMatch = b.match(regex);
        
        if (aMatch && bMatch) {
            const aPrefix = aMatch[1];
            const bPrefix = bMatch[1];
            const aNumber = parseInt(aMatch[2]);
            const bNumber = parseInt(bMatch[2]);

            if (aPrefix === bPrefix) {
                return aNumber - bNumber;
            } else {
                return aPrefix.localeCompare(bPrefix);
            }
        }
        return 0;
    });
}
