export default class TaskItem extends Component {
  @tracked title = '';
  @tracked completed = false;

  @action
  editTask(newTitle) {
    this.title = newTitle;
  }

  @action
  deleteTask() {
    this.args.onDelete(this.args.task.id);
  }
}
