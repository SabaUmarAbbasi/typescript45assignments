
//They think of something you could store in a TypeScript Object.

// let person_Name :string = 'Saba Umar Abbasi';

// const personName_Array :string[] = ['Person', 'Car', 'Cold Drink'];



// Write a program that creates Objects containing these items.

//Datatype of person object
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}

//person object
let person :person = {

    age : 26 ,
    name : 'Saba Umar Abbasi' ,
    nationality : 'Pakistan' ,
    student : true
}

//person print
console.log(person);

 interface car {
     maker : string,
     colour : string,
     automatic : boolean
 }

//car object
let car = {
    maker : 'toyota',
    colour : 'black',
    automatic : true 

}
//car print 
console.log(car);
