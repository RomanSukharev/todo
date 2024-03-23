var deleteTask = (taskId) => {
  const deleteItem = document.getElementById(`${taskId}`);
  deleteItem.classList.add('hidden');

  setTimeout(() => {
    tasks = tasks.filter(item => item.id !== taskId);

    renderTasks(tasks);
  }, 1000);
};

var showAllTasks = () => {
  renderTasks(tasks);
};

var sortTasksById = () => {
  tasks = tasks.reverse();
  renderTasks(tasks);
};

var doneTask = (index) => {
  const completedTask = tasks[index];

  tasks.splice(index, 1);
  tasks.push(completedTask);

  completedTask.done = !completedTask.done;

  renderTasks(tasks);
};

var togglePin = (index) => {

  tasks[index].pinned = !tasks[index].pinned;

  if (tasks[index].pinned) {
    const pinnedTask = tasks.splice(index, 1)[0];
    tasks.unshift(pinnedTask);
  }

  renderTasks(tasks);
};

var searchTasks = (searchText) => {
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()));
  renderTasks(filteredTasks);
};

var showDoneTasks = () => {
  const doneTasks = tasks.filter(task => task.done);
  renderTasks(doneTasks);
};

var showFixedTasks = () => {
  const fixedTasks = tasks.filter(task => task.pinned);
  renderTasks(fixedTasks);
};

var changeTask = (index) => {
  document.getElementById('popup-second').style = "opacity: 1; visibility: inherit";
  const textarea = document.querySelector('.popup-content__textarea-second');
  const readyBtn = document.querySelector('.popup-content__ready-second');
  // Получаем объект задачи по индексу
  const task = tasks[index];

  // Устанавливаем текст в поле textarea
  textarea.value = task.title;

  // Добавляем обработчик события на кнопку "Готово" в popup
  readyBtn.addEventListener('click', () => {
    // Обновляем значение задачи
    task.title = textarea.value;

    // Закрываем popup
    closePopupSecond();

    // Перерендериваем задачи с обновленными значениями
    renderTasks(tasks);
  });
};