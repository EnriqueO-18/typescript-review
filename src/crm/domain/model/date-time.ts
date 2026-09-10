/**
 * Immutable Value Object representing a date and time.
 * Validates that the date is not invalid or in the future when created.
 */
export class DateTime {
    readonly #date: Date;

    /**
     * @param value - Optional Date or date string. If not provided, uses the current date/time.
     * @throws Error if the date is invalid or is in the future.
     */
    constructor(value?: Date | string) {
        const now = new Date();
        if (value) {
            const parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime())) throw new Error(`Invalid date: ${parsedDate}`);
            if (parsedDate > now) throw new Error(`Date cannot be in the future: ${parsedDate}`);
            this.#date = parsedDate;
        } else {
            this.#date = now;
        }
    }

    /**
     * @returns The internal value as a Date object.
     */
    public get value(): Date {
        return this.#date;
    }

    /**
     * @returns ISO 8601 string representation.
     */
    public toString(): string {
        return this.#date.toISOString();
    }

    /**
     * Checks whether two instances represent the same point in time.
     * @param other - Another DateTime instance to compare against.
     * @returns true if both dates are equal.
     */
    public equals(other: DateTime): boolean {
        return this.#date.getTime() === other.value.getTime();
    }

    /**
     * Formats the date according to the given locale.
     * @param locale - Locale configuration (defaults to 'en-US').
     * @returns Human-readable formatted date string.
     */
    public format(locale: string = 'en-US'): string {
        return this.#date.toLocaleDateString(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}