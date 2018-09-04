/*Declaring the function checkLogin as Arrow Function and Using REST Parameter.*/
let checkLogin = (email, password, allUsers) => {
  
  let isUserFound     = false;                          /*Using "let" parameter instead of "var"*/
  let passwordCorrect = false;
  
  for (const currentUser in allUsers){                 /*Declaring currentuser as const as the value remains constant.*/
    console.log(currentUser);

    if(allUsers[currentUser]['email'] == email)
	{
      if(allUsers[currentUser]['password'] == password)
	  {
        isUserFound= true;
        passwordCorrect=true;
        break;
      }
	  else
	  {
        isUserFound= true;
        passwordCorrect=false; 
		break;
      }
    }
	else
	{
      isUserFound = false;
    }
  }//end of for loop

  if(isUserFound == true && passwordCorrect ==true)
  {
    console.log('You are logged in')
  }
  else if(isUserFound  == true && passwordCorrect == false)
  {
    console.log('You have provided incorrect password');
  }
  else
  {
    console.log('No user with this email found');
  }
};

/*
let allUsers = [
	{
		"Name" : "User1",
		"email" : "user1@gmail.com",
		"password" : "password1",
		"MobileNumber" : 9999988888
	},
	{
		"Name" : "User2",
		"email" : "user2@gmial.com",
		"password" : "password2",
		"MobileNumber" : 8888877777
	},
	{
		"Name" : "User3",
		"email" : "user3@gmail.com",
		"password" : "password3",
		"MobileNumber" : 9999977777
	},
	{
		"Name" : "User4",
		"email" : "user4@gmail.com",
		"password" : "password4",
		"MobileNumber" : 6666688888
	}
];

let email = prompt("Enter your E-mail");
let pass  = prompt("Enter your Password");

checkLogin(email,pass,allUsers);
*/
