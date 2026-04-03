import readlineSync from 'readline-sync';
let userName = ""
const greetUser = ()=>{
  userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');

}
export {greetUser, userName} 
