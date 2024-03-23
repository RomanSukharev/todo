var addTask = () => {
  const taskTitle = document.querySelector('.popup-content__textarea').value.trim();

  if (taskTitle !== '') {
    const newTask = {
      id: generateUniqueId(tasks),
      title: taskTitle
    };

    setTimeout(() => {
      tasks.push(newTask);
      renderTasks(tasks);
    }, 1000);

    closePopup();
  } else {
    alert('Пожалуйста, введите задачу');
  }
};

var generateUniqueId = (tasks) => {
  return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
}

document.querySelector('.popup-content__add').addEventListener('click', addTask);