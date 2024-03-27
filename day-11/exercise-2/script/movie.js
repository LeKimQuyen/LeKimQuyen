document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    // Enter your code here: delete movies
    list.onclick = (e) => {
        let deleteBtn = e.target.closest('.delete');
        if (deleteBtn) {
            let deleteMov = deleteBtn.parentElement;
            list.removeChild(deleteMov);
        };
    };

    // Enter your code here: add movies
    const input = forms[0].children[0];
    const addBtn = forms[0].children[1];
    
    // button on click
    addBtn.onclick = (e) => {
        e.preventDefault()
        if (input.value) {
            createElement();
        };
    };

    // press enter
    input.onkeypress = (e) => {
        if (input.value.length > 0 && e.keyCode === 13) {
            createElement();
        }
    };

    function createElement() {
        let li = document.createElement('li');
        li.innerHTML = `
            <span class="name">${input.value}</span>
            <span class="delete">delete</span>
        `
        list.appendChild(li);
        input.value = '';
    };
});