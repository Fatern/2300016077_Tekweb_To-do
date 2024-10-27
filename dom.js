// Background color change
document
.getElementById("bg-color-select")
.addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
});

// Font size control
let fontSize = 16;
document
.getElementById("font-size-increase")
.addEventListener("click", function () {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});
document
.getElementById("font-size-decrease")
.addEventListener("click", function () {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
});

// Dark mode toggle
document
.getElementById("dark-mode-toggle")
.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Font style change
document
.getElementById("font-style-select")
.addEventListener("change", function () {
    document.body.style.fontFamily = this.value;
});

// To-Do List functionality
document.getElementById("add-btn").addEventListener("click", addTask);
document
.getElementById("task-input")
.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
const taskInput = document.getElementById("task-input");
const taskText = taskInput.value.trim();

if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => markAsCompleted(taskSpan);
    taskSpan.ondblclick = () => editTask(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = () => deleteTask(listItem);

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
}

function deleteTask(taskItem) {
taskItem.remove();
}

function editTask(taskSpan) {
    const newTaskText = prompt("Edit task:", taskSpan.textContent);
if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText;
}
}

function markAsCompleted(taskSpan) {
    taskSpan.parentElement.classList.toggle("completed");
}
