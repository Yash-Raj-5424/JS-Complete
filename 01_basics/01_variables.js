const accountId = 12345
let acccountEmail = "abc@gmail.com"
var accountPassword = "55532" 
accountCity = "Bangalore"

console.log(accountId);

//  accountId = 231 // not allowed 

acccountEmail = "c234@gm.com"
accountPassword = "1221"
accountCity = "Mysore"

let accountState; // semi-colon is not necessary
console.log(accountState); // any variable which is not initialized, is undefined by default

/* Prefer not to use var
Because of issues in block scope and functional scope
*/

console.table([acccountEmail, accountId, accountPassword, accountCity])
