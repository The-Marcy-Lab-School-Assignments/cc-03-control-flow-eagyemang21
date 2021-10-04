//1
function isAllLowerCase(string){
  const lowercase = string.toLowerCase()
  if(lowercase === string){
      return true
  }else{
      return false
  }
}
console.log(isAllLowerCase("HEY"))

//2
function countFromOne(int){
  for(let i = 1; i <= int; i++);{ 
console.log(i);
    }
  }
countFromOne(15)

//3
function countEveryEven(number){
  for(let i = 0; i <= number; i += 2);
} console.log(18);

//4
function countEveryOdd(number){
    for(let i = 1; i < number; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
  
}
countEveryOdd(8)

function isNegative(number){
    if(number < 0){
        return true
    }else{
        return false
    }
}
console.log(isNegative(-4))

function betweenFiveAndTwenty(num){
    if(num >= 5 && num <= 20){
        return true
    }else{ 
        return false
    }
}
console.log(betweenFiveAndTwenty(100))

