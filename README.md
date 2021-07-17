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

console.clear()
console.log("IS A === B ?: ", isParams(a).valuesEqualTo(b)) // it will return true cause it makes a deep comparison of the object
/*  
    YOU CAN PASS AS MANY ARGUMENTS AS YOU WANT TO VALIDATE 
    isParams return an object with functions that returns true or false 
*/

isParams(new Date()).instanceOf(Date) // true
isParams(new Date()).instanceOf(RegExp) // false

isParams(a.date).datesEqualTo(b.date) // true
b.date.setDate(b.date.getDate() - 1) // we update the date on object b to test it again
isParams(a.date).datesEqualTo(b.date) // false  cause now b.date has another date value

isParams('1', 1).valuesEqualTo(1) // false  it also makes a type comparison
isParams({},[]).valuesEqualTo([]) // false it makes a difference bettween Array and Object *** typeof recognize an Array as Object

isParams(b.arr).lengthEqualTo(a.arr) // true  is not needed to send length it takes it automatically, and also it gives you the length of string, array, or Object keys
b.arr.push(1) // we update the array to test if it return false
isParams(b.arr).lengthEqualTo(a.arr) // false

isParams('', 1, [],{}).typeEqualTo('array') // false  it compares the types of all params set on isParams as commented before it takes array and object as different type
// the args sent to typeEqualTo is the same as typeof I just added 'array' and a deep comparison bettween array and object

// objectType && arrayType validates if all paramas passed to isParams are object or array


```
