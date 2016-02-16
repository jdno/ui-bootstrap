import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-card-link', 'Integration | Component | ui-card-link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-card-link 'link text'}}`);
  assert.equal(this.$('a').text().trim(), 'link text');

  // Template block usage:"
  this.render(hbs`
    {{#ui-card-link}}
      link text
    {{/ui-card-link}}
  `);

  assert.equal(this.$('a').text().trim(), 'link text');
});
