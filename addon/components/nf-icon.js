import Component from '@ember/component';

import layout from '../templates/components/nf-icon';
/**
 ```handlebars
    <NfIcon @icon="person"/>
  ```
*/

export default class extends Component {
  classNames = ['material-icons', 'nf-icon']

  layout = layout

  tagName = 'i'
}
