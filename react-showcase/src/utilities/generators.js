const defaultWordLength = 20;

export const getRandomString = (length = defaultWordLength) =>
  Array.from({ length })
    .map((_, i) =>
      i === 0
        ? String.fromCharCode(getRandomNumber(65, 90))
        : String.fromCharCode(getRandomNumber(97, 122))
    )
    .join("");

export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1) + min);
