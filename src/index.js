/****************************************
 * Dub Terminal
 */

import { h, render } from 'preact';
import DubTerminalComponent from './ui/main.js';

/** 
* SaSS
*/
import './dub-terminal.scss';
import styles from './style-string.js';
render((
  <style id="dub-terminal-css">{styles}</style>
), document.querySelector('head'));

render(<DubTerminalComponent />, document.body);