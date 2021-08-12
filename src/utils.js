const MONTH = 12;

export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export const getMothInCreditPeriod = (period) => {
    return period * MONTH
}
