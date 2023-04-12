const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (input.value !== "") {
		addTask(input.value);
		input.value = "";
	}
});

function addTask(task) {
	const li = document.createElement("li");
	li.innerHTML = `<span>${task}</span><button onclick="deleteTask(this)">Delete</button>`;
	list.appendChild(li);
}

function deleteTask(element) {
	element.parentNode.remove();
}
