import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nf-add', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function renderTest(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NfAdd />`);

    assert.ok(find('.ember-view').textContent.trim());
  });
});
