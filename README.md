# utils

// to install just run yarn add @juanjo4u/utils
```
import { isParams } from "@juanjo4u/utils";

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
    },
    test: {
        0: 1
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
    },
    test: [1]
}

//b.date.setDate(b.date.getDate() - 1)

console.clear()
//console.log("IS A === B ?: ", is(a).valuesEqualTo(b))

console.log("1", isParams(new Date()).instanceOf(Date)) // true
console.log(isParams(new Date()).instanceOf(RegExp)) // false

console.log("2", isParams(a.date).datesEqualTo(b.date)) // true
b.date.setDate(b.date.getDate() - 1) // we update the date on object b to test it again
console.log(isParams(a.date).datesEqualTo(b.date)) // false  cause now b.date has another date value

console.log("3", isParams('1', 1).valuesEqualTo(1)) // false  it also makes a type comparison
console.log(isParams({}, []).valuesEqualTo([])) // false it makes a difference bettween Array and Object *** typeof recognize an Array as Object

console.log("4", isParams(b.arr).lengthEqualTo(a.arr)) // true  is not needed to send length it takes it automatically, and also it gives you the length of string, array, or Object keys
b.arr.push(1) // we update the array to test if it return false
console.log("5", isParams(b.arr).lengthEqualTo(a.arr)) // false

console.log("6", isParams('', 1, []).typeEqualTo('array')) // false  it compares the types of all params set on isParams as commented before it takes array and object as different type
// the args sent to typeEqualTo is the same as typeof I just added 'array' and a deep comparison bettween array and object

console.log(isParams(a.test).valuesEqualTo(b.test)) // false cause it also compares the type


```
