////////// INSTANCE
export const isInstanceOf = (instance, ...args) => {
    for (const val of args)
        if (!(val instanceof instance)) return false
    return true
}