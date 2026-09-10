import { Currency } from "./currency";

export class Money {
    readonly #amount: number;
    readonly #currency: Currency;

    constructor(amount: number, currency: Currency) {
        if (amount < 0) throw new Error(`Amount must be a positive integer: ${amount}`);
        this.#amount = amount;
        this.#currency = currency;
    }

    public get amount(): number { return this.#amount; }

    public get currency(): Currency { return this.#currency; }

    public format(locale: string = 'en-US'): string { return this.#currency.formatAmount(this.#amount, locale); }

    public toString(): string {
        return `${this.#currency.code} ${this.#amount.toFixed(2)}`;
    }

    public add(other: Money): Money {
        if (this.#currency.code !== other.currency.code) {
            throw new Error(`Cannot add amounts with different currencies: ${this.#currency.code} and ${other.currency.code}`);
        }
        return new Money(this.#amount + other.amount, this.#currency);
    }

    public multiply(factor: number): Money {
        if (factor < 0) throw new Error(`Amount must be a positive integer: ${factor}`);
        return new Money(this.#amount * factor, this.#currency);
    }
}