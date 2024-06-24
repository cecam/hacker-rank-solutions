function bonAppetit(bill, k, b) {
    const initialValue = 0
    const annaConsumed = bill.reduce(
        (accumulator, currentValue, index) => {
            return index !== k ? accumulator + currentValue : accumulator
        },
        initialValue,
    ) / 2;
    
    console.log(annaConsumed === b ? 'Bon Appetit' : b - annaConsumed)
}