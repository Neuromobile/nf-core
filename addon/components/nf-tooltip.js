import Component from '@ember/component';

import layout from '../templates/components/nf-tooltip';

/**
 ```handlebars
  <NfTooltip @icon="info" @tooltip="Lorem Ipsum" @position="right"/>
  ```
*/

export default class extends Component.extend({
  // sizes: tiny, small, medium, large
  size: 'tiny'
}) {
  classNames = ['nf-tooltip']

  layout = layout

  tagName = 'span'

}
