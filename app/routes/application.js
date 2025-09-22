import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    // Return initial data, not get from controller
    return [];
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    // The model is automatically set, no need to manually set it
    // controller.set('tasks', model); // This happens automatically
  }
}
