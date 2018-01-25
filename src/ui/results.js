import { h } from 'preact';

export default function ResultMessage (props) {
  if (props.thinking) {
    return <p className="dubterm-results__thinking">&#9608;</p>
  }
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