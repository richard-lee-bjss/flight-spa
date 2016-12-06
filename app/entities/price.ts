export class Price {

    constructor (
    public value: number, // integer values.Scale x100 for display.
    public valueWithDebitCard: number, // integer values.Scale x100 for display.
    public valueWithCreditCard: number // integer values.Scale x100 for display.y
    ) {}
}
