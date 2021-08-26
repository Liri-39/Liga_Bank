export const realtyCredit = {
    minSum: 500000,
    values: {
        min: 1200000,
        max: 25000000,
        step: 100000,
        default: 2000000
    },
    initialFee: {
        min: 10,
        step: 5,
    },
    creditPeriod: {
        min: 5,
        max: 30,
        step: 1,
    },
    options: {
        maternityCapital: {
            text: `Использовать материнский капитал`,
            value: 470000,
            refValue: `targetPrice`
        },
    },
    rate: {
        limitValue: 15,
        belowLimitValue: 9.4,
        aboveLimitValue: 8.5
    },
    incomeLimit: 45
}

export const autoCredit = {
    minSum: 200000,
    values: {
        min: 500000,
        max: 5000000,
        step: 50000,
        default: 1000000
    },
    initialFee: {
        min: 20,
        step: 5,
    },
    creditPeriod: {
        min: 1,
        max: 5,
        step: 1,
    },
    options: {
        lifeInsurance: {
            text: `Оформить Страхование жизни в нашем банке`,
            value: 0,
            refValue: ``
        },
        autoInsurance: {
            text: `Оформить КАСКО в нашем банке`,
            value: 0,
            refValue: ``
        },
    },
    rate: {
        limitValue: 2000000,
        belowLimitValue: 16,
        aboveLimitValue: 15,
        withOneInsurance: 8.5,
        withTwoInsurance: 3.5
    },
    incomeLimit: 45
}
