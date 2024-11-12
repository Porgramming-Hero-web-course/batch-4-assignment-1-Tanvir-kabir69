// Define an interface Profile with properties name, age, and email.
// Create a function updateProfile that accepts an object of type Profile
// and an object of type Partial representing the updates. The function
// should return the updated profile.


interface Profile {
    name : string;
    age : number;
    email :  string;
}

function updateProfile <T extends Partial<Profile> >(profile : Profile, update : T)  : Profile {
    return {...profile , ...update}
}

const profile : Profile = {
    name : "Tanvir",
    age :33,
    email : "tkgmail.com"
}

updateProfile(profile, {name : "jfjf", age :22})
console.log(updateProfile(profile, {name : "jfjf", age :22}))
