// Create UI variables
const form = document.querySelector('.task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearTask = document.querySelector('.clear-task');

// Load all addEventListeners
loadAllEventListeners();

// loadAllEventListeners function
function loadAllEventListeners() {
  // Add Task Event
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  // error handling
  if (taskInput.value === '') {
    alert('Please Input Value!!!');
    return true;
  }

  // create li for .collection
  const list = document.createElement('li');
  // Add a class
  list.className = 'collection-item';
  // Create a textNode inside list
  list.appendChild(document.createTextNode(taskInput.value));

  // create link element
  const link = document.createElement('a');
  // add link class
  link.className = 'delete-item secondary-content';
  // add icon element to link
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // appendChild link to list
  list.appendChild(link);

  // append li to .collection (taskList)
  taskList.appendChild(list);

  // clear taskInput
  taskInput.value = '';

  e.preventDefault();
}