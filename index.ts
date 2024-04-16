let firstName: string = "Chris";
let birthday: string = "10/09/1993";

//template string using firstName and birthday strings
let output: string = `Name: ${firstName} | Date Of Birth: ${birthday}`

console.log(output); // Name: Chris | Date Of Birth: 10/09/1993

// create an array of numbers called numList, 1-10
let numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// use an iterator and find sum of the elements within the array
function sumOfAll(numList) {
    let sum = 0;
    for (let num of numList)
        sum += num;
        return sum;
};

console.log(sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// create an object called contact
//let contact: object;
let contact = {
    contactName: "Bob",
    dob: "02/02/92",
    role: "student"
};

// destructure the object above into three different variables: contactName, dob, and role
let {contactName, dob, role} = contact;
console.log(contactName);
console.log(dob);
console.log(role);

// print a template string 
let fName: string = "Bob";
let birth: string = "02/02/92";
let hisRole: string = "student";
//template string using firstName and birthday strings
let statement: string = `"${fName} is a ${hisRole} learning to code and was born on ${birth}."`; // "Bob is a student learning to code and was born on 02/02/94"
console.log(statement);