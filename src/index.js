
/**

TODO:

setup
on page load, get all current users playlists names and ID and create an object of them


UI

place button right above profile logo which open closes the mini-terminal
/-----/
/ $_  /
/-----/

single line results, no scrolling. This is a very simplified terminal
/------------------------------------------------/
/ print result here                              /
/------------------------------------------/-----/
/ $ enter commands here                    /  <  /
/------------------------------------------/-----/

var user = Dubtrack.session.get('username');

*/
import './dub_term.scss';
import { h, render, Component } from 'preact';

class DubTerminal extends Component {
  
  componentWillMount() {
    // load css file
  }

  render() {
    return (
      <div id="dub-terminal" className="dubterm-container">
        <div className="dubterm-main">
          <div className="dubterm-results"></div>
          <div className="dubterm-input-c">
            <input type="text" id="dubterm-input" />
            <span>&dollar;&nbsp;</span>
          </div>
        </div>
        <button className="dubterm-toggle"><span>&gt;_</span></button>
      </div>
    );
  }
}

// preact APPENDs by default 
render(<DubTerminal />, document.body);