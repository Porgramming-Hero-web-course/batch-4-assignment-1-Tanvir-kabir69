// Write a generic function getProperty that takes an object and 
// a property name as arguments and returns the property value.
// Add a constraint to ensure the property name exists on the object.

function getProperty <T, K extends keyof T> (object : T, propertyName : K) : T[K]{
    return object[propertyName];
}

let person = {
    name : "Tanvir",
    age : 22,
    isStudent : true
}

console.log(getProperty(person, "name"), getProperty(person, "age"))