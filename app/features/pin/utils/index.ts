export const generateUniqueNumbers = () => {
  const num1 = Math.floor(Math.random() * 6) + 1
  let num2 = Math.floor(Math.random() * 6) + 1

  while (num2 === num1) {
    num2 = Math.floor(Math.random() * 6) + 1
  }

  return [num1, num2]
}
