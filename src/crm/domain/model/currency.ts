type UpperCaseLetter =
    | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M'
    | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type CurrencyCode = `${UpperCaseLetter}${UpperCaseLetter}${UpperCaseLetter}`;

export class Currency {
    readonly #code: CurrencyCode;

    constructor(code: CurrencyCode) {
        this.#code = code;
    }

    public get code(): CurrencyCode { return this.#code; }

    public formatAmount(amount: number, locale: string = 'en-US'): string {
        return amount.toLocaleString(locale, {
            style: 'currency',
            currency: this.#code,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
}