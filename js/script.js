// Array to stor items

let items = [];

// HTML to JS Variables

let itemsDiv = document.querySelector('.items');

// To Do List Functions

function renderItems() {
    itemsDiv.textContent = null;

    for (let [idx, item] of Object.entries(items)) {
        let text = document.createElement('p');
        text.textContent = item;

        itemsDiv.appendChild(text);
    }
}

function loadItems() {

}

function saveItems() {

}

function addItems() {

}

function removeItem() {

}