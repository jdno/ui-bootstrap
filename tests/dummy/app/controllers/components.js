import Ember from 'ember';
const htmlSafe = Ember.String.htmlSafe;

export default Ember.Controller.extend({
  inverse: false,
  actions: {
    cardAction(context) {
      this.get('flashMessages').success(htmlSafe(`Action button -- <i>${context.elementId}</i> -- was pressed`));
    }
  }
});
