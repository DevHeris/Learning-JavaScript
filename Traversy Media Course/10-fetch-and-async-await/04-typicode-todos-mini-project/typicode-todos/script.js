const apiUrl = "http://jsonplaceholder.typicode.com/todos";

// Note that this(?_limit=5) is to limit the amount of todos we want to fetch to 5 and not the default of 200 the api actually wants to give us
function getTodos() {
  fetch(apiUrl + "?_limit=10 ")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
}

function createTodo(event) {
  event.preventDefault();

  const newTodo = {
    title: event.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
}

function updateTodo(id, completed) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      completed,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function addTodoToDOM(todo) {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
}

function toggleCompleted(event) {
  if (event.target.classList.contains("todo")) {
    event.target.classList.toggle("done");

    updateTodo(
      event.target.dataset.id,
      event.target.classList.contains("done") //Returns a true or false value
    ); // This changes(updates) the value of completed to 'true'/'false'.
  }
}

function deleteTodo(event) {
  const id = event.target.dataset.id;
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => event.target.remove());
}

function init() {
  // Event listeners
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
}

init();
