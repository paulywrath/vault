// Create message for user about lock code.
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`

/* Assign three variables representing parts of the lock code. 
Each variable is a calculation using a unique arithmetic operator.*/
const lockCode1 = 100%90;
const lockCode2 = 80/2;
const lockCode3 = 40-1;

// Create a popup dialog box displaying the vault codes and the text.
alert (`${message} ${lockCode1}-${lockCode2}-${lockCode3}`)