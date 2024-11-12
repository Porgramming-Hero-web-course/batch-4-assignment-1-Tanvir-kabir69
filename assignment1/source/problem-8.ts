// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes
// an object obj and an array of keys keys. The function should return
// true if all of the specified keys exist in the object; otherwise, it
// should return false.


function validateKeys(obj: object, keys: string[]) : boolean{
    for(const key of keys){
        if(! ( key in obj)){
            return false;
        }
    }

    return true;
}


const person = {name : "Tanvir", age: 44, add: "Shiromoni", ass : "black"}

console.log(validateKeys(person,["add","name","agej"]))