// Code your solutions in this file
function printBadges(names){
  for(let i=0;i<names.length;i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function tailsNeverFails(){
  let tails = 0
  while(Math.random() >= 0.5){
    tails++
  }
  return `You got ${tails} tails in a row!`
}
<<<<<<< HEAD
=======

>>>>>>> 3af2c2d4fe6f4425c47dcbfcb92391ef77e3f3a4
