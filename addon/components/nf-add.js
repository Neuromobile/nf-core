import { computed } from '@ember/object';
import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';

import layout from '../templates/components/nf-add';

/**
 ```handlebars
  <NfAdd @icon="add" @id="" @route="" @tooltip=""/>
  ```
*/

export default class extends Component {
  /**
  The materialize icon code.


  By default the icon will be `add` but you could change the icon passing
  a materialize icon code as argument.
  */
  @argument
  @type('string')
  icon = 'add'

  /**
  The tooltip text

  By default the component will not show any text but you can add a tooltip
  writing your text as argument.
  */

  @argument
  @type('string')
  tooltip = ''

  /**
  The action or model id

  Id of the current model, by default it will not have it but it
  can be passed in order to identify the current model.

  */
  @argument
  @type('string')
  id = ''

  /**
  The route

  It is required to pass the actual route which will
  be pushed in the params constant.
  */
  @argument
  @type('string')
  route = ''

  classNames = ['nf-add']

  layout = layout

  tagName = 'span'

  @computed('route', 'id')
  get params() {
    const {
      route,
      id
    } = this;
    const params = [];

    params.push(route);

    if (id) {
      params.push(id);
    }

    return params;
  }
}
