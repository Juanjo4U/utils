import { constants } from "../../constants"

export const isArray = (arr) => arr && Array.isArray(arr)
export const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj)

export const isParamsArrayType = (...args) => {
    if (!args.length) return false
    for (const val of args)
        if (!isArray(val)) return false
    return true
}

export const isParamsObjectType = (...args) => {
    if (!args.length) return false
    for (const val of args)
        if (!isObject(val)) return false
    return true
}

export const isParamsType = (type, ...args) => {
    if (!constants.PARAM_TYPES.includes(type)) throw new Error('provided type is not a valid type to compare')
    switch (type) {
        case 'object':
            return isParamsObjectType(...args);
        case 'array':
            return isParamsArrayType(...args);

        default: {
            if (!args.length) return false
            for (const val of args)
                if (typeof val !== type) return false
            return true
        }
    }
}