// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add
// an empty todo into the list
// Also add a search bar to search throygh the todo-list
const input = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", function (event) {
  //   console.dir(event);
  event.preventDefault();
  // creating div element
  const div = document.createElement("div");
  div.classList.add("todo");
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("todo-item");
  div.appendChild(li);
  // Reset the value
  input.value = "";
  // don't add empty task
  if (li.innerText == '') {
    target.value = "";
  }
  // creating complete button
  const comltBtn = document.createElement("button");
  comltBtn.innerHTML = `<i class="fas fa-check"></i>`;
  comltBtn.classList.add("check");
  div.appendChild(comltBtn);
  // creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteBtn.classList.add("trash");
  div.appendChild(deleteBtn);
  // Appending div into todoList
  todoList.appendChild(div);
});

todoList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList[0] == "trash") {
    const div = target.parentElement;
    div.remove();
  } else if (target.classList[0] == "check") {
    const div = target.parentElement;
    div.classList.add("completed");
    target.remove();
  }
});
