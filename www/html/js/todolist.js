var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

  //Each element needs modifying

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addTask = function() {
  console.log("Add task...");
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);

  let xhr = new XMLHttpRequest();
  let url = getCurrentURL();
  let todoToCreate = url + 'createTodo/';
  xhr.open("POST", todoToCreate, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


  // function execute after request is successful
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //Append listItem to incompleteTasksHolder
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    }
  }

  xhr.send("todo="+taskInput.value);
  taskInput.value = "";
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  //if the class of the parent is .editMode
  if (containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  } else {
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }

  //Toggle .editMode on the list item
  listItem.classList.toggle("editMode");

}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  let id = getChildren(listItem);

  let xhr = new XMLHttpRequest();
  let url = getCurrentURL();
  let todoToDelete = url + 'delete/' + id;
  xhr.open("GET", todoToDelete, true);

// function execute after request is successful
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //Remove the parent list item from the ul
      ul.removeChild(listItem);
    }
  }
  // Sending our request
  xhr.send();

}

function getCurrentURL () {
  return window.location.href
}

function getChildren (listItem) {
  var children = listItem.children;
  for (var i = 0; i < children.length; i++) {
    var tableChild = children[i];
    if (tableChild.id === 'id'){
      return tableChild.value;
    }
  }
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  let id = getChildren(listItem);

  let xhr = new XMLHttpRequest();
  let url = getCurrentURL();
  let todoToEdit = url + 'edit/' + id;
  xhr.open("GET", todoToEdit, true);

// function execute after request is successful
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      completedTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskIncomplete);
    }
  }
  // Sending our request
  xhr.send();
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //Append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  let id = getChildren(listItem);

  let xhr = new XMLHttpRequest();
  let url = getCurrentURL();
  let todoToEdit = url + 'edit/' + id;
  xhr.open("GET", todoToEdit, true);

// function execute after request is successful
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    }
  }
  // Sending our request
  xhr.send();

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

// var ajaxRequest = function() {
// 	console.log("AJAX request");
// }

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}