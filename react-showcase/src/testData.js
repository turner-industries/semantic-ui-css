import { getRandomNumber, getRandomString } from "./utilities/generators";

let id = 1;
export const testItems = Array.from({ length: 200 }).map((x, i) => ({
  id: id++,
  name: getRandomString(),
  age: getRandomNumber(),
  other: getRandomString(),
}));
