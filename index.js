var firstName = "Chris";
var birthday = "10/09/1993";
//template string using firstName and birthday strings
var output = "Name: ".concat(firstName, " | Date Of Birth: ").concat(birthday);
console.log(output); // Name: Chris | Date Of Birth: 10/09/1993
// create an array of numbers called numList, 1-10
var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// use an iterator and find sum of the elements within the array
function sumOfAll(numList) {
    var sum = 0;
    for (var _i = 0, numList_1 = numList; _i < numList_1.length; _i++) {
        var num = numList_1[_i];
        sum += num;
    }
    return sum;
}
;
console.log(sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// create an object called contact
//let contact: object;
var contact = {
    contactName: "Bob",
    dob: "02/02/92",
    role: "student"
};
// destructure the object above into three different variables: contactName, dob, and role
var contactName = contact.contactName, dob = contact.dob, role = contact.role;
console.log(contactName);
console.log(dob);
console.log(role);
// print a template string 
var fName = "Bob";
var birth = "02/02/92";
var hisRole = "student";
//template string using firstName and birthday strings
var statement = "\"".concat(fName, " is a ").concat(hisRole, " learning to code and was born on ").concat(birth, ".\""); // "Bob is a student learning to code and was born on 02/02/94"
console.log(statement);
