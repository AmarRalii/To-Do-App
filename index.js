   // Selecting elements
   const todoInput = document.getElementById('todo-input');
   const addButton = document.getElementById('add-btn');
   const todoList = document.getElementById('todo-list');

   // Add a new to-do
   addButton.addEventListener('click', () => {
       const task = todoInput.value.trim();
       if (task) {
           addTodo(task);
           todoInput.value = '';
       }
   });

   // Add a task to the list
   function addTodo(task) {
       const li = document.createElement('li');
       li.className = 'todo-item';

       const taskText = document.createElement('span');
       taskText.textContent = task;

       // Mark as completed
       taskText.addEventListener('click', () => {
           li.classList.toggle('completed');
       });

       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';

       // Delete task
       deleteButton.addEventListener('click', () => {
           li.remove();
       });

       li.appendChild(taskText);
       li.appendChild(deleteButton);
       todoList.appendChild(li);
   }