function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = taskText;
    
    var delButton = document.createElement('button');
    delButton.textContent = 'Delete';
    delButton.classList.add('delete-btn');
    delButton.onclick = function() {
        li.remove();
    };
    
    li.appendChild(delButton);
    taskList.appendChild(li);
    
    taskInput.value = '';
}
