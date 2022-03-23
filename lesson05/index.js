let answer = prompt("Enter Q for quit, W to withdraw, D to deposit, B to view balance");
let currentBalance = 500;
switch(answer) {
   case "W":
   let withdrawInput = prompt("Withdraw:");
   let newBalance1 =  currentBalance - withdrawInput;
   alert("New balance:" + " " + "$" + newBalance1);
   prompt("Enter Q for quit, W to withdraw, D to deposit, B to view balance");

   case "D":
   let depositInput = prompt("Deposit:");
   depositInput =  +depositInput + currentBalance;
   alert("New balance:" + " " + "$" + depositInput);
   prompt("Enter Q for quit, W to withdraw, D to deposit, B to view balance");

  case "B":
  alert("New balance:" + " " + "$" + depositInput);
  prompt("Enter Q for quit, W to withdraw, D to deposit, B to view balance");
  case "Q":
  break;
}
