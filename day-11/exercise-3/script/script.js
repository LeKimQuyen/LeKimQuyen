function validate() {
    
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var course = document.getElementById('course');
    
    // Enter your code here
    let radio = Array.from(document.querySelectorAll('[type="radio"]')).find(child => {
        return child.checked;
    })
    checkRequired(fname.value, 'First Name');
    checkRequired(lname.value, 'Last Name');
    checkRequired(address.value, 'Address');
    if (!radio) {
        alert('Gender is required')
    }
    if (checkRequired(email.value, 'Email Id')) {
        if (!checkEmail(email.value)) {
            alert('Email must in proper fortmat');
        }
    }
    if (checkRequired(mobile.value, 'Mobile')) {
        if (!IsNumeric(mobile.value)) {
            alert('Mobile is a number');
        }
    }
    checkRequired(course.value, 'Course');
}

/*

    missing  validations
     - phone is a number
     - email in proper fortmat

    look at day 10- additional examples and try these on your own

*/
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
function checkRequired(inputValue, inputName) {
    if ((!inputValue) || inputValue === 'select course')
        alert(`${inputName} is required`);
    else
        return true;
};