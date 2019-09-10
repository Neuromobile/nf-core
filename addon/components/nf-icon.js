import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';

import layout from '../templates/components/nf-icon';
/**
 ```handlebars
    <NfIcon @icon="person"/>
  ```
*/

export default class extends Component {
/**
  The materialize icon code
*/
 @argument
 @type('string')
 icon

  classNames = ['material-icons', 'nf-icon']

  layout = layout

  tagName = 'i'
}
