export const randomizeArray = (arr) => {
  const array = [...arr];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const newPos = Math.floor(Math.random() * length);
    const newPosValue = array[newPos];

    array[newPos] = array[i];
    array[i] = newPosValue;
  }

  return array;
}