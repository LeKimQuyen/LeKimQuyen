console.log("Hello world!");

// Add your js code below here!
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('completed');
    };
});