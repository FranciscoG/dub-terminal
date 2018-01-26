import { h, Component } from 'preact';
import ResultMessage from './results.js';
import commands from '../commands';
import cmdHistory from '../utils/history.js';

// keyUp/keyDown event.keyCode constants
const UP      = 38;
const DOWN    = 40;
const ENTER   = 13;
const ESC     = 27;
const TAB     = 9;

export default class DubTerminalComponent extends Component {
  constructor() {
    super();
    this.state = { 
      toggleOpen : 'dubterm-open',
      result : { info : `hi ${Dubtrack.session.get('username')}!` }
    };
    this.toggleTerminal = this.toggleTerminal.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({toggleOpen : ''});
    }, 1500);
  }

  toggleTerminal (e) {
    if (this.state.toggleOpen === 'dubterm-open') {
      this.setState({toggleOpen : ''});
    } else {
      this.setState({toggleOpen : 'dubterm-open'});
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
    cmdHistory.insert(val);
    let data = val.split(' ');
    let action = data.shift();

    if (action === 'clear') {
      this.setState({result : null });
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

  onUp(e) {
    e.target.value = cmdHistory.back();
  }

  onDown(e) {
    e.target.value = cmdHistory.forward();
  }

  keyDown(e) {
    if (e.keyCode === UP) {
      e.preventDefault();
      this.onUp(e);
    }
    if (e.keyCode === DOWN) {
      e.preventDefault();
      this.onDown(e);
    }
  }

  keyUp(e) {
    if (e.keyCode === ENTER) {
      e.preventDefault();
      if (e.target.value === '') { return; }
      this.setState( { result : { thinking:true } });
      this.onEnter(e.target.value);
      e.target.value = '';
      return
    }
  }

  render(props, state) {
    let containerClass = ("dubterm-container " + state.toggleOpen).trim();
    return (
      <div id="dub-terminal" className={containerClass}>
        <div className="dubterm-main">
          <div className="dubterm-results" ref={e=>this.results=e}>
            <ResultMessage {...state.result} />
          </div>
          <div className="dubterm-input-c">
            <input onKeyUp={this.keyUp} 
                   onKeyDown={this.keyDown}
                   type="text" 
                   id="dubterm-input" />
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