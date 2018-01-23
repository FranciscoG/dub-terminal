/**
TODO:
setup
on page load, get all current users playlists names and ID and create an object of them
var user = Dubtrack.session.get('username');
*/

import './dub-terminal.scss';
import { h, render, Component } from 'preact';
import styles from './style-string.js';

class DubTerminalComponent extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = { 
      results : '',
      toggleCss : 'dubterm-open'
    };
    this.toggleTerminal = this.toggleTerminal.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  componentWillMount() {
    // load CSS into a <style> tag into head
    var newStyleTag = document.createElement('style');
    newStyleTag.innerHTML = styles;
    newStyleTag.id="dub-terminal-css";
    document.head.appendChild(newStyleTag);
  }

  toggleTerminal (e) {
    if (this.state.toggleCss === 'dubterm-open') {
      this.setState({toggleCss : ''});
    } else {
      this.setState({toggleCss : 'dubterm-open'});
    }
  }

  checkInput(e) {
    if (e.keyCode === 13) {
      console.log(e);
      e.preventDefault();
      if (e.target.value === '') { return; }
      // grab value
      // send value to be process
      // clear input
      console.log(e.target.value);
      this.setState({results : e.target.value});
      e.target.value = '';
    }
  }

  render(props, state) {
    let containerClass = ("dubterm-container " + state.toggleCss).trim();
    return (
      <div id="dub-terminal" className={containerClass}>
        <div className="dubterm-main">
          <div className="dubterm-results">{state.results}</div>
          <div className="dubterm-input-c">
            <input onKeyUp={this.checkInput} type="text" id="dubterm-input" />
            <span>&gt;</span>
          </div>
        </div>
        <button 
          onClick={this.toggleTerminal}
          className="dubterm-toggle"><span>&gt;_</span></button>
      </div>
    );
  }
}

// preact APPENDs by default 
render(<DubTerminalComponent />, document.body);