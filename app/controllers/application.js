import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  newTaskTitle = '';
  tasks = [];

  @action
  addTask() {
    if (!this.newTaskTitle.trim()) {
      return;
    }
    const newTask = {
      id: Date.now(),
      title: this.newTaskTitle,
      completed: false
    };
    this.tasks = [...this.tasks, newTask];
    this.newTaskTitle = '';
  }

  @action
  editTask(taskId, actionType) {
    if (actionType === "toggleCompletion") {
      this.tasks = this.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    }
    // You can add more edit logic here (like editing the title)
  }

  @action
  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  @action
  updateNewTaskTitle(event) {
    this.newTaskTitle = event.target.value;
  }
}
