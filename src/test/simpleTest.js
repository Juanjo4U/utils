import { isParams } from ".."

const a = {
    name: 'Juanjo',
    age: 27,
    date: new Date(),
    regex: new RegExp(),
    arr: [{ omg: 'OMG' }],
    obj: {
        wtf: 'WTF',
        last: {
            last: [{}]
        }
    }
}

const b = {
    name: 'Juanjo',
    age: 27,
    date: new Date(),
    regex: new RegExp(),
    arr: [{ omg: 'OMG' }],
    obj: {
        wtf: 'WTF',
        last: {
            last: [{}]
        }
    }
}

//b.date.setDate(b.date.getDate() - 1)

console.clear()
console.log("IS A === B ?: ", isParams(a).valuesEqualTo(b))