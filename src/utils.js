import {CreditTypesEnum, MATERNITY_CAPITAL_VALUE} from "./const";

const MONTH = 12;

export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export const getMothInCreditPeriod = (period) => {
    return period * MONTH
}

export const calcCreditSum = (id, params) => {
    const sum = params.targetPrice - params.initialFeeSum;
    if (params.maternityCapital) {
        return sum - MATERNITY_CAPITAL_VALUE
    }
    return sum
}


export const calcRate = (id, params, rate) => {
    let autoRate;
    switch (id) {
        case CreditTypesEnum.REALTY:
            if (params.creditPeriod >= rate.limitValue) {
                return rate.aboveLimitValue
            }
            return rate.belowLimitValue;
        case CreditTypesEnum.AUTO:
            autoRate = rate.belowLimitValue;
            if (params.targetPrice >= rate.limitValue) {
                autoRate = rate.aboveLimitValue
            }
            if (params.lifeInsurance || params.autoInsurance) {
                autoRate = rate.withOneInsurance
            }
            if (params.lifeInsurance && params.autoInsurance) {
                autoRate = rate.withTwoInsurance
            }
            return autoRate
        default:
            return ``
    }
}


export const calcPayMonth = (id, params, sum, rate) => {
    const procRateMonth = rate / 100 / MONTH;
    const countPeriods = getMothInCreditPeriod(params.creditPeriod);
    return Math.round(sum *
        (procRateMonth +
            (procRateMonth / (Math.pow((1 + procRateMonth), countPeriods) - 1))
        )
    );
};

export const calcIncome = (payment) => {
    return payment/0.45
}

export const addZero = (orderNum, orderNumLength) => {
    orderNum++;
    let num = orderNum + '';

    while (num.length < orderNumLength) {
        num = '0' + num;
    }

    return num;
}

export const periodInText = (period) => {
    switch (Number(period)) {
        case (1):
            return `год`;
        case (21):
            return `год`;
        case (2):
            return `года`;
        case (3):
            return `года`;
        case (4):
            return `года`;
        case (22):
            return `года`;
        case (23):
            return `года`;
        case (24):
            return `года`;
        default:
            return `лет`
    }
}
