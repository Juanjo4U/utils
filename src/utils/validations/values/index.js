import { isDateEqual } from "../date";
import { isInstanceOf } from "../instance";
import { isLengthEqual } from "../length";
import { isParamsArrayType, isParamsObjectType } from "../type";

//////// UTILS
const isValueEqual = (a, b) => a === b

export const isSameInstanceValue = (a, b) => {
    switch (true) {
        case isInstanceOf(RegExp, a, b):
            return a.source === b.source;
        case isInstanceOf(Date, a, b):
            return isDateEqual(a, b);
        default: return false
    }
}

////////  OBJECT
export const isObjectValuesEqual = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj1 !== typeof obj2)
        throw new Error('all params has to be type object');
    if (isParamsObjectType(obj1, obj2) || isParamsArrayType(obj1, obj2)) {
        let isEqual = true && isLengthEqual(obj1, obj2);
        for (const key in obj1) {
            if (!isEqual) return false;
            const a = obj1[key], b = obj2[key];
            if (typeof a !== typeof b) return false
            isEqual = typeof a === 'object' ? (
                (a instanceof Date || b instanceof Date) || (a instanceof RegExp || b instanceof RegExp) ?
                    isSameInstanceValue(a, b) :
                    isObjectValuesEqual(a, b)
            ) : isValueEqual(a, b)
        }
        return isEqual
    } else return false
}

export const isParamsValuesEqualTo = (value, ...args) => {
    let isEqual = true
    for (const val of args) {
        if (!isEqual) return false
        isEqual = typeof val === 'object' ? (
            (value instanceof Date || val instanceof Date) || (value instanceof RegExp || val instanceof RegExp) ?
                isSameInstanceValue(value, val) :
                isObjectValuesEqual(value, val)
        ) : isValueEqual(val, value)
    }
    return isEqual
}