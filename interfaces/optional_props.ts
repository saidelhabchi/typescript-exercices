interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string
}
function updatePerson(person:Person,update :{fname ?: string, lname ?: string, age?: number, email?: string}){
    if (update.fname){
        person.firstName = update.fname
    }
    if (update.lname){
        person.lastName = update.lname
    }
    if (update.age){
        person.age = update.age
    }
    if (update.email){
        person.email = update.email
    }

    return person
}   