import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';

import layout from '../templates/components/nf-tooltip';

/**
 ```handlebars
  <NfTooltip @content="Lorem Ipsum"/>
  ```
*/

export default class extends Component {
  /**
  The materialize icon code.


  By default the icon will be `info` but you could change the icon passing
  a materialize icon code as argument.
  */
  @argument
  @type('string')
  icon = 'info'

  /**
  The tooltip side.


  By default the side will be `right` but you could change the side passing
  `left, right, top or bottom` as argument.
  */
  @argument
  @type('string')
  side = 'right'

  /**
  The icon size.


  By default the size will be `tiny` but you could change the size passing
  `tiny, small, medium or large` as argument.
  */
  @argument
  @type('string')
  size ='tiny'

  /**
  The tooltip text
  */
  @argument
  @type('string')
  text = ''


  classNames = ['nf-tooltip']

  layout = layout

  tagName = 'span'
}
