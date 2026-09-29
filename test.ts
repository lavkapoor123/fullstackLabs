type Person = { name: string; age: number; }
// destructure function parameter
const sendMessage = ({ name, age }: Person): string => `Hello ${name}, aged ${age}`;
// destructure function parameter type
const hi = (person: { name: string, age: number }): string =>
`Hello ${person.name}, aged ${person.age}`;
// without destructuring
const hello = (person: Person): string =>
`Hello ${person.name}, aged ${person.age}`;
// put the value of the field name in new parameter myName
const john: Person = { name: `John`, age: 45 };
const { name: myName, age: myAge } = john
console.log(myAge); //Jo