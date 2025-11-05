const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", btnPress);

function btnPress(event) {
  event.preventDefault(); 

  // get input
  text = input.value;
  if (text.length === 0) {
    return;
  }
  input.value = "";

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

  // move focus to input field
  input.focus()
}

function deleteItem(event) {
  // refers to button that was clicked
  const clicked = event.target;
  // gets parent element of button, which is the <li> element
  const itemToDelete = clicked.parentElement;
  itemToDelete.remove();
}


