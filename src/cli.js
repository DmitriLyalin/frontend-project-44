import readlineSync from 'readline-sync';
let userName = ""
const greetUser = ()=>{
console.log('Welcome to the Barin Games!')
  userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
return userName

}
export {greetUser} 
