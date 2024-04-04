// Function to load list items from local storage
function loadListItems() {
    let savedItems = localStorage.getItem('todoList');
    if (savedItems) {
        document.getElementById('list').innerHTML = savedItems;
    }
}

// Call loadListItems when the page loads
window.addEventListener('load', loadListItems);

// Function to save list items to local storage
function saveListItems() {
    let listItemsHTML = document.getElementById('list').innerHTML;
    localStorage.setItem('todoList', listItemsHTML);
}

const val = document.getElementById('listItems');
const list = document.getElementById('list');

let toDo = () => {
    if (val.value === '') {
        alert('Please enter a value');
    } else {
        let listItem = document.createElement('p');
        listItem.textContent = val.value;
        
        let item = document.createElement('div');
        item.appendChild(listItem);

        let icon = document.createElement('i');
        icon.className = 'fa fa-trash';
        item.appendChild(icon);

        list.appendChild(item);

        listItem.className = 'list-item';
        icon.className = 'fa fa-trash';
        item.className = 'item';
    }
    val.value = '';
    saveListItems(); // Save list items after adding a new one
}

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        e.target.classList.toggle("checked");
        saveListItems(); // Save list items after checking/unchecking
    } else if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        saveListItems(); // Save list items after removing an item
    }
});

val.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        toDo();
    }
});
