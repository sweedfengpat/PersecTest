export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    // กำหนดฟังก์ชันเพื่อจัดลำดับผลลัพธ์ตามเงื่อนไขที่กำหนด
    function sortItems(a: string, b: string): number {
        const searchLower = search.toLowerCase();
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        const aStartsWith = aLower.startsWith(searchLower);
        const bStartsWith = bLower.startsWith(searchLower);

        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        if (aStartsWith && bStartsWith) return aLower.localeCompare(bLower);

        const aIndex = aLower.indexOf(searchLower);
        const bIndex = bLower.indexOf(searchLower);

        if (aIndex !== bIndex) return aIndex - bIndex;
        return aLower.localeCompare(bLower);
    }

    // กรองรายการที่มีคำค้นหาอยู่ภายใน
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    // จัดเรียงรายการที่กรองแล้วตามเงื่อนไข
    const sortedItems = filteredItems.sort(sortItems);

    // ส่งผลลัพธ์ตามจำนวนสูงสุดที่กำหนด
    return sortedItems.slice(0, maxResult);
}
