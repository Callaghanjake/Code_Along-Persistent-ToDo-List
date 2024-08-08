// Array to stor items

let items = [];

// HTML to JS Variables

let itemsDiv = document.querySelector('.items');

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
        button.onClick = () => {removeItem(idx)};

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

renderItems();

function loadItems() {

}

function saveItems() {

}

function addItems() {

}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
}