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
  // Remove list task
  taskList.addEventListener('click', removeTask);
  // Clear tasks event
  clearTask.addEventListener('click', clearTasks);
  // Filter event
  filter.addEventListener('keyup', filtered);
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

// removeTask 
function removeTask(e) {
  
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  
}

// ClearTask function
function clearTasks() {
  // taskList.innerHTML = '';

  // faster way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// function filtered
function filtered(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    task => {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        console.log(item.indexOf(text));
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  )
}