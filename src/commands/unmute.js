/**
 * unmute
 * turn mute off
 */

const metadata = {
  command: "unmute"
};
export default function() {
  let $btn = $('.mute');
  let result = {};

  if ($btn.hasClass('sound-muted')) {
    $btn.trigger('click');
    result.success = 'mute OFF';
  } else {
    result.error = 'mute is not on';
  }

  return Object.assign({}, metadata, result);
}