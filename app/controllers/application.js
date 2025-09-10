export default class ApplicationController extends Controller {
  tasks = [];

  addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  editTask(taskId, newTitle) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.title = newTitle;
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
