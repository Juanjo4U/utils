import * as validate from "./utils/validations";

export const isParams = (...args) => {
    const curry = (func, isOwnParamRequired = true) => (...conditionArgs) => func(...isOwnParamRequired ? conditionArgs : [], ...args)

    return {
        instanceOf: curry(validate.instance.isInstanceOf),
        datesEqualTo: curry(validate.date.isDateEqualTo),
        valuesEqualTo: curry(validate.values.isParamsValuesEqualTo),
        lengthEqualTo: curry(validate.length.isLengthEqualTo),
        typeEqualTo: curry(validate.type.isParamsType),
        objectType: curry(validate.type.isParamsObjectType, false),
        arrayType: curry(validate.type.isParamsArrayType, false),
    }
}