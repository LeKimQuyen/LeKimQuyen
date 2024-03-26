//this is the main function 
function checkForm() {
    //collecting user inputs 
    firstname = document.getElementById("firstname").value;
    surname = document.getElementById("surname").value;
    age = document.getElementById("age").value;
    //calls another function IsNumeric 
    ageNumeric = IsNumeric(age);
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    //calls another function IsNumeric 
    phoneNumeric = IsNumeric(phone);
    email = document.getElementById("email").value;
    //calls another function checkEmail
    emailResult = checkEmail(email);
    password = document.getElementById("password").value;
    customer = document.getElementById("customer").value;

    //Enter your code here: checking for empty inputs and displaying error 
    // firstName
    if (!checkRequired(firstname))
        document.querySelector('#firstnameError').style.display = 'block';
    else {
        document.querySelector('#firstnameError').style.display = 'none';
    };
    // surname
    if (!checkRequired(surname))
        document.querySelector('#surnameError').style.display = 'block';
    else {
        document.querySelector('#surnameError').style.display = 'none';
    };
    // age
    if (!checkRequired(age) || !checkAge(age) || !ageNumeric)
        document.querySelector('#ageError').style.display = 'block';
    else {
        document.querySelector('#ageError').style.display = 'none';
    };
    // address
    if (!checkRequired(address))
        document.querySelector('#addressError').style.display = 'block';
    else {
        document.querySelector('#addressError').style.display = 'none';
    };
    // phone
    if (!checkRequired(phone) || !phoneNumeric)
        document.querySelector('#phoneError').style.display = 'block';
    else {
        document.querySelector('#phoneError').style.display = 'none';
    };
    // email
    if (!checkRequired(email) || !emailResult)
        document.querySelector('#emailError').style.display = 'block';
    else {
        document.querySelector('#emailError').style.display = 'none';
    };
    // password
    if (!checkRequired(password))
        document.querySelector('#passwordError').style.display = 'block';
    else {
        document.querySelector('#passwordError').style.display = 'none';
    };
    // customer
    if (!checkRequired(customer))
        document.querySelector('#customerError').style.display = 'block';
    else {
        document.querySelector('#customerError').style.display = 'none';
    };
};


//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr){
    mystring = numstr;
    if (mystring.match(/^\d+$/ ) ) {
        return true;
    } else {
        return false;
    };
};

//checks if email is in proper email format
function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)) {         
        return true;
    } else {   
        return false;
    };  
};

// checks required input
function checkRequired(inputValue) {
    if ((!inputValue) || inputValue === 'choose your customer type')
        return false;
    else
        return true;
};

// checks if valid age
function checkAge(inputValue) {
    if (inputValue >= 16 && inputValue <= 90)
        return true;
    else
        return false;
};