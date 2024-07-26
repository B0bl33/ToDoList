// Fully load DOM:
document.addEventListener('DOMContentLoaded', function() {
    // Get ref to elements needed
    const toDoInput = document.getElementById('todo-input');
    const addToDoButton = document.getElementById('add-todo-button');
    const todoList = document.getElementById('todo-list');

    // Load to-do list from localStorage
    loadTodos();

    // Add event listener to the add button
    addToDoButton.addEventListener('click', function() {
        // Get value of input and trim whitespace
        const task = toDoInput.value.trim();

        // Check if input is empty
        if (task !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            // Create span to hold task text
            const taskText = document.createElement('span');
            taskText.textContent = task;
            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            // Add event listener for delete button to remove task
            deleteButton.addEventListener('click', function() {
                // Remove list item when clicked
                todoList.removeChild(listItem);
                saveTodos(); // Save to-do list after removal
            });

            // Apply a random background color to the list item
            listItem.style.backgroundColor = getRandomColor();

            // Append task text and delete button to list item
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
            // Append list item to the todo list
            todoList.appendChild(listItem);
            // Save to-do list after addition
            saveTodos();
            // Clear input for next task
            toDoInput.value = '';
        }
    });

    // Function to save to-dos to localStorage
    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach(item => {
            todos.push(item.querySelector('span').textContent);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Function to load to-dos from localStorage
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(task => {
            // Create new list item
            const listItem = document.createElement('li');
            // Create span to hold task text
            const taskText = document.createElement('span');
            taskText.textContent = task;
            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            // Add event listener for delete button to remove task
            deleteButton.addEventListener('click', function() {
                // Remove list item when clicked
                todoList.removeChild(listItem);
                saveTodos(); // Save to-do list after removal
            });

            // Apply a random background color to the list item
            listItem.style.backgroundColor = getRandomColor();

            // Append task text and delete button to list item
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
            // Append list item to the todo list
            todoList.appendChild(listItem);
        });
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
