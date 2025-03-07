// Array to stor items

let items = [];

// HTML to JS Variables

let itemsDiv = document.querySelector('.items');
let input = document.querySelector('.item-input');
let alertSpan = document.querySelector('.alert');
let addBtn = document.querySelector('.addBtn'); 

// Cookie variable

let storageKey = 'items';

// To Do List Functions

function renderItems() {
    itemsDiv.textContent = null;

    for (let [idx, item] of Object.entries(items)) {

        let container = document.createElement('div');
        container.style.marginBottom = '10px';

        let text = document.createElement('p');
        text.style.display = 'inline';
        text.style.marginRight = '10px';
        text.textContent = item;

        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function loadItems() {
    let oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        items = JSON.parse(oldItems);
        renderItems();
    }
}

function saveItems() {
    let stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItems() {
    let value = input.value;
    if (!value) {
        alertSpan.textContent = "You haven't typed anything";
        return;
    }
    items.push(value);
    renderItems();
    input.value = '';
    saveItems();
}

addBtn.addEventListener('click', () => {
    addItems();
})

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

document.addEventListener('DOMContentLoaded', loadItems);