const tasksContainer = document.getElementById('tasks');

var renderTasks = (tasks) => {
  tasksContainer.innerHTML = '';

  tasks.map((task, index) => {
    tasksContainer.innerHTML += `
      <div class="item-number">${index + 1}
      <div class="task ${task.done ? 'done' : ''}"  id="${task.id}"> 
        <h3>id = ${task.id}</h3><span>${task.title}</span>
        <div class="buttons">
        <div class="buttons-area">
        <button onclick="changeTask(${index})">Изменить</button>
        <button onclick="doneTask(${index})">Готово</button>
        <button onclick="togglePin(${index})">${task.pinned ? 'Открепить' : 'Закрепить'}</button>
        <button onclick="deleteTask(${task.id})">Удалить</button>
        </div>
        </div>
      </div>
      </div>`;
  });
};