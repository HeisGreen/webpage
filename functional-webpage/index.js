const usersDatabase = {
  chido123: {
    firstName: "Chido",
    lastName: "Green",
    email: "chidogreen2000@gmail.com",
    accountActivated: true,
    password: " ",
  },

  geegrace: {
    firstName: "grace",
    lastName: "essien",
    email: "geegreen2000@gmail.com",
    accountActivated: true,
    password: "geegrace123",
  },

  kanyin123: {
    firstName: "kanyin",
    lastName: "Green",
    email: "kanreen2000@gmail.com",
    accountActivated: false,
    password: "kanyin123",
  },
};

function displayUserdetails() {
  let username = prompt("Enter your Username");
  while (validateUsername(username) == false) {
    username = prompt("Please enter your Username again");
  }
  if (username == null) {
    return;
  }

  let password = prompt("Enter your Password");
  while (validatePassword(password) == false) {
    password = prompt("Please enter your Password again");
  }
  if (password == null) {
    return;
  }

  let confirmPassword = prompt("Confirm Password");
  while (confirmPassword != password) {
    confirmPassword = prompt("Please confirm your password again");
  }
  if (confirmPassword == null) {
    return;
  }

  const user = usersDatabase[username];
  if (user == undefined) {
    alert("user not found. please sign up");
    return;
  }
  console.log(user);

  alert(`
User found with the following details :
First Name : ${user.firstName}
Last Name : ${user.lastName}
Email : ${user.email}
Account Activated : ${user.accountActivated}
`);

  // console.log(username,password)
}

displayUserdetails();
alert("Login Successful.");

function validateUsername(username) {
  if (username == null) {
    return true;
  }
  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
