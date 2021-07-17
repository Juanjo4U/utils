////////// DATE
export const isDateEqual = (a, b) => {
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
    } else throw new Error('all arguments has to be instance of Date');
}

export const isDateEqualTo = (date, ...args) => {
    if (!(date instanceof Date)) throw new Error('the param date to compare is not instance of Date');
    for (const val of args)
        if (!isDateEqual(val, date)) return false
    return true
}