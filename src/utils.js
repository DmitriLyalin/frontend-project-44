const getRandomNumber = (max, min = 0) => {
  let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min)
  return randomNumber
}

// Максимальное значение для случайных чисел
const range = 100
export {range, getRandomNumber }
