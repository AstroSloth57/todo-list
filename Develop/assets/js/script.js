// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const addTaskBtn = $('#add-task-btn');
const taskName = $('#taskInput');

addTaskBtn.click(function() {
    const task = taskName.value;
    localStorage.setItem("tasks", task);
})

$( function() {
    $( "#taskDueDate" ).datepicker();
  } );

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const newCard = $('<div>');
    newCard.addClass('card');

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
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
