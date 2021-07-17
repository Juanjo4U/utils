import { isDateEqual } from "../date";
import { isLengthEqual } from "../length";

//////// UTILS
const isValueEqual = (a, b) => a === b

////////  OBJECT
const isObjectValuesEqual = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj1 !== typeof obj2) throw new Error('all params has to be type object');
    let isEqual = true && isLengthEqual(obj1, obj2);
    for (const key in obj1) {
        if (!isEqual) return false;
        let a = obj1[key], b = obj2[key];
        if (typeof a !== typeof b || b === undefined) return false
        isEqual = typeof a === 'object' ? (
            a instanceof Date ? (b instanceof Date ? isDateEqual(a, b) : false) :
                a instanceof RegExp ? (b instanceof RegExp ? a.source === b.source : false) :
                    isObjectValuesEqual(a, b)
        ) : isValueEqual(a, b)
    }
    return isEqual
}

export const isParamsValuesEqualTo = (value, ...args) => {
    let isEqual = true
    for (const val of args) {
        if (!isEqual) return false
        isEqual = typeof val === 'object' ? (
            val instanceof Date ?
                (value instanceof Date ? isDateEqual(val, value) : false) :
                val instanceof RegExp ?
                    (value instanceof RegExp ? val.source === value.source : false) :
                    isObjectValuesEqual(val, value)
        ) : isValueEqual(val, value)
    }
    return isEqual
}