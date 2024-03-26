// Modify these code to complete your tasks

var button = document.getElementById("enter"); // Get reference to the button element with id "enter"
var input = document.getElementById("userinput"); // Get reference to the input element with id "userinput"
var ul = document.querySelector("ul"); // Get reference to the unordered list (ul) element

function inputLength() {
	return input.value.length; // Return the length of input value
}

function createListElement() {
	var li = document.createElement("li"); // Create a new list item (li) element
	// create trash emoji
	let trash = document.createElement('span');
	trash.appendChild(document.createTextNode(' 🗑️'));
	li.appendChild(document.createTextNode(input.value)); // Create a text node for the list item text and append it to the list item
	// add trash into li
	li.appendChild(trash);
	ul.appendChild(li); // Append the list item to the unordered list (ul)
	input.value = ""; // Clear the input value after adding the list item
}

function addListAfterClick() {
	if (inputLength() > 0) { // Check if input value has length greater than 0
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { // Check if input value has length greater than 0 and Enter key is pressed
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

button.addEventListener("click", addListAfterClick); // Add event listener to the button for click event to add a new list item
input.addEventListener("keypress", addListAfterKeypress); // Add event listener to the input for keypress event to add a new list item
ul.addEventListener("mouseover", deleteItem);

// deleting
function deleteItem() {
	if (ul.childElementCount !== 0) {
		let spans = ul.querySelectorAll('span');
		
		spans.forEach(span => {
			span.onclick = () => {
				ul.removeChild(span.parentElement);
			};
		});
	};
};