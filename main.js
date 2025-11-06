const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", btnPress);

function createItem(text) {
  // list item and button
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");

  // setting text content
  listItem.textContent = text;
  deleteButton.textContent = "x"

  // structuring elements
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);

  // eventlistener
  deleteButton.addEventListener("click", deleteItem);
}

function btnPress(event) {
  event.preventDefault(); 

  // get input
  const text = input.value;
  if (text.length === 0) {
    return;
  }
  input.value = "";

  createItem(text)

  // move focus to input field
  input.focus()

  saveList();
}

function deleteItem(event) {
  // refers to button that was clicked
  const clicked = event.target;
  // gets parent element of button, which is the <li> element
  const itemToDelete = clicked.parentElement;
  itemToDelete.remove();

  saveList()
}

function saveList() {
  // gets all list items in ul
  const items = list.querySelectorAll("li");

  // text content into array (not delete button's x)
  const listArray = Array.from(items).map(item => {
    return item.textContent.slice(0, -1);
  });

  // converts js array to JSON string 
  localStorage.setItem("todoListItems", JSON.stringify(listArray));
}

function loadList() {
  // gets data from browser local storage
  const savedData = localStorage.getItem("todoListItems");

  // checks if there is any data
  if (!savedData) {
    return;
  }

  // converting JSON string to array
  const listArray = JSON.parse(savedData);

  // make the list items again
  listArray.forEach(text => createItem(text));
}

// Loads list if there is items in local storage
loadList();







