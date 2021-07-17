///////// LENGTH
export const isLengthEqual = (a, b) => {
    if (typeof a !== typeof b || a === undefined) throw new Error('all params has to be the same type');
    if (typeof a === 'string' || Array.isArray(a)) return a.length === b.length;
    if (typeof a === 'object') return Object.keys(a).length === Object.keys(b).length;
    return false;
}

export const isLengthEqualTo = (value, ...args) => {
    for (const val of args)
        if (!isLengthEqual(val, value)) return false
    return true
}