var tasks;

var fetchDataFromBackend = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTPS: ${response.status}`);
    }
    tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    console.error('Ошибка при отрисовке задач:', error);
  }
};

fetchDataFromBackend();