/****************************************
 * Dub Terminal
 */

import { h, render, Component } from 'preact';
import commands from './commands';
import playlists from './utils/playlists.js';

/** 
* SaSS
*/
import './dub-terminal.scss';
import styles from './style-string.js';
render((
  <style id="dub-terminal-css">{styles}</style>
), document.querySelector('head'));


function ResultMessage (props) {
  if (props.error) {
    return <p className="dubterm-results__error">{props.error}</p>
  }
  if (props.success) {
    return <p className="dubterm-results__success">{props.success}</p>
  } 
  if (props.info) {
    return <p className="dubterm-results__info">{props.info}</p>
  }
  if (props.warning) {
    return <p className="dubterm-results__warning">{props.warning}</p>
  }
  return null;
}

class DubTerminalComponent extends Component {
  constructor() {
    super();
    this.state = { 
      toggleCss : 'dubterm-open',
      result : { info : 'hi ' + Dubtrack.session.get('username') }
    };
    this.toggleTerminal = this.toggleTerminal.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({toggleCss : ''});
    }, 1500);
  }

  toggleTerminal (e) {
    if (this.state.toggleCss === 'dubterm-open') {
      this.setState({toggleCss : ''});
    } else {
      this.setState({toggleCss : 'dubterm-open'});
    }
  }

  checkCommands(action, data) {
    if (commands[action]) {
      return commands[action](data);
    } else {
      return Promise.reject(`${action} is not a recognized command`);
    }
  }

  onEnter(val) {
    let data = val.split(' ');
    let action = data.shift();

    if (action === 'clear') {
      this.results.innerHTML = "";
      return;
    }

    this.checkCommands(action, data)
      .then((result)=>{
        this.setState( { result } );
      })
      .catch((error)=>{
        this.setState( { result : {error}  } );
      });
  }

  checkInput(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value === '') { return; }
      this.onEnter(e.target.value);
      e.target.value = '';
    }
  }

  render(props, state) {
    let containerClass = ("dubterm-container " + state.toggleCss).trim();
    return (
      <div id="dub-terminal" className={containerClass}>
        <div className="dubterm-main">
          <div className="dubterm-results" ref={e=>this.results=e}>
            <ResultMessage {...state.result} />
          </div>
          <div className="dubterm-input-c">
            <input onKeyUp={this.checkInput} type="text" id="dubterm-input" />
            <span>&gt;</span>
          </div>
        </div>
        <button 
          onClick={this.toggleTerminal}
          className="dubterm-toggle">
            <span>&gt;_</span>
        </button>
      </div>
    );
  }
}

render(<DubTerminalComponent />, document.body);