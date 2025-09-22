import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TaskItem extends Component {
  @action
  editTask(task) {
    let newTitle = prompt("Edit task title", task.title);
    if (newTitle !== null) {
      this.args.onEdit(task.id, newTitle);
    }
  }

  @action
  toggleCompletion(task) {
    this.args.onToggle(task.id);
  }

  @action
  deleteTask(task) {
    this.args.onDelete(task.id);
  }
}
