function isSnakeEyes() {
  let randomCouple = [
    Math.ceil(Math.random() * 6),
    Math.ceil(Math.random() * 6),
  ];
  let total = 0;
  console.log(randomCouple);
  for (i of randomCouple) {
    total += i;
  }

  total == 2
    ? console.log(`Snake Eyes ${randomCouple}`)
    : console.log(`Not Snake eyes ${randomCouple}`);
}

isSnakeEyes();
