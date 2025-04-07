/*Today We Will Learn About the Concept of Constants, Variables*/

const Name = "Bhavesh Rajpurohit"   //Immutable
let Email = "rajpurohitbhavesh2027@gmail.com" //Mutable
City = "Jodhpur" //Should avoided
let Contact;   //Creating a Variable for future purpose

//Let's Try to change the values of above stuffs which we have written

//NOTE :- If you try to change the value of Const value, it Will never change cuz Constants are Immutable. 

//We can change the below parametres without any problem. 
Email = "novaniche2027@gmail.com"  // Will definitely Change if inntentionally it will be changing.
City = "San Fransisco"  //Though JS is a Safe language but we should'nt use such practices of writing without any keyword.
Contact = 123456789

console.log([Name, Email, City, Contact]);  //For Displaying the Output of whatever logic you've implemented above via JS.
