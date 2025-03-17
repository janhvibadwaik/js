//primitive
//7 types:String,Number,Boolean,null.undefined,Symbol,BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId = Symbol('123');
console.log(id===35737725593)

//Refference(Non-Primitive)
//Array,Object,Functions
const bigNumber=34537529586n
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,
}
const myFunction =function(){
    console.log("Hello world");
}
console.log(typeof bigNumber); 
console.log(typeof myFunction);
console.log(typeof anotherId);


/*type of val-result
undefined - "undefined"
Null-"object"
Boolean-"boolean"
Number-"number"
String-"string"
object(native and does not implemengt ([call])-"object"
object(native or host and does implement([call])-"function"
object(host and does not implement([call])-implementation defined may not be "undefined","boolean","number" or "string".
*/


