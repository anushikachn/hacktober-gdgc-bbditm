document.addEventListener('DOMContentLoaded', function() {
// Array to store tasks
localStorage.clear();
let tasks = [];

// Load existing tasks from localStorage on page load
window.onload = function() {
  if(localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    renderTasks();
  }
};

 // Set up theme toggle functionality on page load
 const currentTheme = localStorage.getItem('theme');
 if (currentTheme === 'dark') {
   document.body.classList.add('dark-theme');
 }
   // Theme toggle functionality
   document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

// Handle form submission
document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get contributor name and task content
  const name = document.getElementById('contributor-name').value;
  const content = document.getElementById('task-content').value;
  const dueDate = document.getElementById('due-date').value;
  const dueTime = document.getElementById('due-time').value; 

  // Create a new task object
  const task = {
    name: name,
    content: content,
    completed: false,
    dueDate: dueDate,
    dueTime: dueTime,
    timestamp: new Date().toISOString()
  };
  
  // Add the new task to the array and save it
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));


  // Clear the form fields
  document.getElementById('contributor-name').value = '';
  document.getElementById('task-content').value = '';
  document.getElementById('due-date').value = '';
  document.getElementById('due-time').value = '';
 
});

  // Re-render tasks
  renderTasks();
});

// Function to render tasks on the page
function renderTasks() {
  const tasksContainer = document.getElementById('tasks-container');
  tasksContainer.innerHTML = '';

  const now = new Date();  // Get the current date and time




  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    
     // Combine due date and time into a single Date object for comparison
     const taskDueDateTime = new Date(`${task.dueDate}T${task.dueTime}`);

     // Check if task due date/time is in the past
     if (taskDueDateTime < now) {
      taskElement.classList.add('past-due');  // Mark task as past due
    }


    const taskContent = document.createElement('p');
    taskContent.textContent = task.content;
    if (task.completed) {
      taskContent.classList.add('completed');
    }

    const contributor = document.createElement('p');
    contributor.textContent = `Contributed by ${task.name} on  ${new Date(task.timestamp).toLocaleString()}`;
    contributor.className = 'contributor';
    
    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${task.dueDate} at ${task.dueTime}`;


    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.addEventListener('click', () => toggleComplete(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => deleteTask(index));

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);
    
    taskElement.appendChild(taskContent);
    taskElement.appendChild(contributor);
    taskElement.appendChild(actions);
    taskElement.appendChild(dueDateElement);
    tasksContainer.appendChild(taskElement);
  });

//show sorting options after 3 or more tasks are added
if (tasks.length >= 3) {
  document.getElementById('sort-options').style.display = 'block';
} else {
  document.getElementById('sort-options').style.display = 'none';
}
if (tasks.length >= 3) {
  document.getElementById('sort-due-date').style.display = 'block';
} else {
  document.getElementById('sort-due-date').style.display = 'none';
}
}


// Function to sort tasks by due date
document.getElementById('sort-due-date').addEventListener('click', function() {
  tasks.sort((a, b) => {
    const dateA = new Date(`${a.dueDate}T${a.dueTime}`);
    const dateB = new Date(`${b.dueDate}T${b.dueTime}`);
    return dateA - dateB;  // Sort in ascending order
  });
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save sorted tasks
  renderTasks();  // Re-render tasks
});

// Function to sort tasks by timestamp
document.getElementById('sort-by-timestamp').addEventListener('click', function() {
  tasks.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));  // Sort in ascending order by timestamp
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save sorted tasks
  renderTasks();  // Re-render tasks
});

// Function to sort tasks by completion status
document.getElementById('sort-by-completion').addEventListener('click', function() {
  tasks.sort((a, b) => Number(b.completed) - Number(a.completed));  // Sort completed tasks first
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save sorted tasks
  renderTasks();  // Re-render tasks
});

// Function to toggle task completion
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}




// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}
document.getElementById('contributor-name').value = '';
document.getElementById('task-content').value = '';
});