var array = ["FizzBuzz", , , "Fizz", , "Buzz", "Fizz", , , "Fizz", "Buzz", , "Fizz", ,]
function fizzBuzz(number) {
    return array[(Math.abs(number) % 15)] || number
}