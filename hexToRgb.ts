export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    const validHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!validHex.test(hex)) {
        return null;
    }

    if (hex.length === 4) {
        const r = parseInt(hex[1] + hex[1], 16);
        const g = parseInt(hex[2] + hex[2], 16);
        const b = parseInt(hex[3] + hex[3], 16);
        return { r, g, b };
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}