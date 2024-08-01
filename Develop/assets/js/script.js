// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const addTaskBtn = $('#add-task-btn');
const taskName = $('#task-input');
const todoCards = $('#todo-cards');
const addTaskForm = $('#add-task-form');
const taskDueDate = $('#task-due-date');
const taskDescription = $('#task-description');

localStorage.setItem('nextId', 0)

$(function () {
    $("#taskDueDate").datepicker();
});

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // for (let i = 0; i < taskList.length; i++) {
    //     const taskId = `task${i}`;
    //     return taskId
    // }

    // currentId = JSON.parselocalStorage.getItem('nextId');
    // newId = currentId + 1;

    // return newId

    let newId = 0
    newId = nextId + 1
}

function readTasksFromStorage() {
    if (!tasks) {
        tasks = [];
    }
    return tasks;
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('projects', JSON.stringify(tasks));
}
// Todo: create a function to create a task card
function createTaskCard(task) {
    const newCard = $('<div>');
    newCard.addClass('card');
    newCard.attr('data-task-id', task.id);

    const cardHeader = $('h4');
    cardHeader.addClass('card-header h4');
    cardHeader.text(task.name);

    const cardBody = $('div');
    cardBody.addClass('card-body');

    const cardDueDate = $('p');
    cardDueDate.addClass('card-text');
    cardDueDate.text(task.dueDate);

    const cardDescription = $('p');
    cardDescription.addClass('card-text');
    cardDescription.text(task.description);

    const deleteBtn = $('button');
    deleteBtn.addClass('btn delete');
    deleteBtn.text('Delete');

    cardBody.append(cardDueDate);
    cardBody.append(cardDescription);
    cardBody.append(deleteBtn);

    newCard.append(cardHeader);
    newCard.append(cardBody);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = readTasksFromStorage();

    todoList = $('#todo-cards');
    todoList.empty();

    inProgressList = $('#in-progess-cards');
    inProgressList.empty();

    doneList = $('#done-cards');
    doneList.empty();

    for (let task of tasks) {
        if (task.status === 'to-do') {
            todoList.append(createTaskCard(task));
        } else if (task.status === 'in-progress') {
            inProgressList.append(createTaskCard(task));
        } else if (task.status === 'done') {
            doneList.append(createTaskCard(task));
        }
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();
    const task = {
        id: generateTaskId(),
        title: taskName.val(),
        dueDate: taskDueDate.val(),
        description: taskDescription.val(),
        status: 'to-do',
    }
    const tasks = readTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);
    renderTaskList();
    
    taskName.val('');
    taskDueDate.val('');
    taskDescription.val('');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const taskId = $(this).attr('data-task-id');
    const tasks = readTasksFromStorage();

    tasks.forEach((task) => {

        if (task.id === taskId) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    saveTasksToStorage(tasks);
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // addTaskBtn.click(function() {
    //     const task = taskName.value;
    //     localStorage.setItem("tasks", task);
    // })
    addTaskForm.on('submit', handleAddTask)
});

projectDisplayEl.on('click', '.delete', handleDeleteProject);