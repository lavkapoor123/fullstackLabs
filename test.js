// destructure function parameter
var sendMessage = function (_a) {
    var name = _a.name, age = _a.age;
    return "Hello ".concat(name, ", aged ").concat(age);
};
// destructure function parameter type
var hi = function (person) {
    return "Hello ".concat(person.name, ", aged ").concat(person.age);
};
// without destructuring
var hello = function (person) {
    return "Hello ".concat(person.name, ", aged ").concat(person.age);
};
// put the value of the field name in new parameter myName
var john = { name: "John", age: 45 };
var myName = john.name, myAge = john.age;
console.log(myAge); //Jo
