import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-progress', 'Integration | Component | ui progress', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-progress}}`);
  assert.equal(this.$().text().trim(), '%');
  this.render(hbs`{{ui-progress '35'}}`);
  assert.equal(this.$().text().trim(), '35%');
  this.render(hbs`{{ui-progress 45}}`);
  assert.equal(this.$().text().trim(), '45%');


});
