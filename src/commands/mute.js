/**
 * mute / unmute player
 */

const metadata = {
  command: "mute"
};
export default function() {
  let $btn = $('.mute');
  let result = {};

  if ($btn.hasClass('sound-muted')) {
    $btn.trigger('click');
    result.success = 'mute OFF';
  } else {
    $btn.trigger('click');
    result.success = 'mute ON';
  }

  return Object.assign({}, metadata, result);
}