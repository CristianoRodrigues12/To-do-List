// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}

