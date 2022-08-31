export const getPrimeNumbers = (maxNumber = 1) => {
  if (maxNumber <= 1) return 0;

  const primeArray = Array.from({ length: maxNumber }, () => false);

  primeArray[2] = true;

  for (let index = 3; index < maxNumber; index += 2) {
    primeArray[index] = true;
  }

  for (let index = 3; index < maxNumber; index += 2) {
    if (primeArray[index]) {
      let squared = index ** 2;
      if (squared >= maxNumber) break;
      for (index *= 2; squared < maxNumber; squared += index) {
        primeArray[squared] = false;
      }
      index /= 2;
    }
  }

  return primeArray.filter(isPrime => isPrime).length;
};
