function sumOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
  return total;
}

function redux(arr) {
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
}

sumOfArray([1, 2, 3, 4]);
redux([1, 2, 3, 4]);
