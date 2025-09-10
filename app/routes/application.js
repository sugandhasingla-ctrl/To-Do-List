export default class ApplicationRoute extends Route {
  model() {
    return this.controllerFor('application').get('tasks');
  }

  setupController(controller) {
    super.setupController(controller);
    controller.set('tasks', []);
  }
}
