const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', deleteTask);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function deleteTask() {
    const taskItem = this.parentNode;
    taskList.removeChild(taskItem);
}

addButton.addEventListener('click', addTask);
