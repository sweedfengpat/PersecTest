export class ReverseEncoder {
    private alphabet = 'abcdefghijklmnopqrstuvwxyz';
    private reversedAlphabet = this.alphabet.split('').reverse().join('');

    // Method ที่ใช้สำหรับการเข้ารหัส
    encode(input: string): string {
        const encodedWords = input.split(' ').map(word => {
            return word.split('').map(char => {
                const lowerChar = char.toLowerCase();
                const index = this.alphabet.indexOf(lowerChar);
                if (index !== -1) {
                    const encodedChar = this.reversedAlphabet[index];
                    return char === lowerChar ? encodedChar : encodedChar.toUpperCase();
                }
                return char;
            }).join('');
        });
        return encodedWords.reverse().join(' ');
    }

    // Method ที่ใช้สำหรับการถอดรหัส
    decode(input: string): string {
        const decodedWords = input.split(' ').reverse().map(word => {
            return word.split('').map(char => {
                const lowerChar = char.toLowerCase();
                const index = this.reversedAlphabet.indexOf(lowerChar);
                if (index !== -1) {
                    const decodedChar = this.alphabet[index];
                    return char === lowerChar ? decodedChar : decodedChar.toUpperCase();
                }
                return char;
            }).join('');
        });
        return decodedWords.join(' ');
    }
}
