function isAdult(name, age) {
  age >= 18
    ? console.log(`Mr. ${name} is an adult!`)
    : console.log(`Mr. ${name} is underage!`);
}

isAdult("Charles", 50);
isAdult("Charlie", 10);
