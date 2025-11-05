const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", btnPress);

function btnPress() {
  event.preventDefault(); 
  let item = document.createElement("p");
  item.textContent = "hello";
  list.appendChild(item);
}
