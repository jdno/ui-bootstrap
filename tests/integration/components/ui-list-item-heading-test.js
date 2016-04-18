import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-list-item-heading', 'Integration | Component | ui list item heading', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-list-item-heading}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-list-item-heading}}
      template block text
    {{/ui-list-item-heading}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
