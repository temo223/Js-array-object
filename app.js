// დავალება 1
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const mean = sum / numbers.length;
console.log("arithmetic mean:", mean);

// დავალება 2
const people = [
  { name: "jonn", age: 25 },
  { name: "alice", age: 30 },
  { name: "bob", age: 35 },
  { name: "emma", age: 40 },
  { name: "michel", age: 45 }
];

// დავალება 3
const person = {
  firstName: "jonn",
  lastName: "smiith",
  address: ["123 Main St", "Apt 2B", "city", "country"],
  age: 30,
  phoneNumbers: [123456789, 987654321]
};

// დავალება 4 My name is (#3 დავალების firstName  მნიშვნელობა)", My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"
console.log(`My name is ${person.firstName}. My age is ${person.age}. My address is ${person.address[0]}.`);
