// Given a number, n, loop n times and return 
// ●	answer[i] == "FizzBuzz" if ‘i’ is divisible by 3 and 5
// ●	answer[i] == "Fizz" if ‘i’ is divisible by 3
// ●	answer[i] == "Buzz" if ‘i’ is divisible by 5
// ●	answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(n) {
    let fizzArray = []
   
   for (let i = 0; i <= n; i++){
       if (i %3 === 0 && i %5 === 0){
        fizzArray.push("fizzBuzz")

       }else if ( i%3 === 0){
        fizzArray.push("fizz")

       }else if ( i %5 === 0){
        fizzArray.push("Buzz")

       }else{
        fizzArray.push(i.toString())
       }
    }
    return fizzArray
}

console.log(fizzBuzz(3))

// question 5

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }

  const unsortedArray = [9, 5, 2, 7, 1, 8, 4, 6, 3];

  const sortedAscending = sortAscending(unsortedArray);
  console.log("Ascending Order:", sortedAscending);
  
  const sortedDescending = sortDescending(unsortedArray);
  console.log("Descending Order:", sortedDescending);