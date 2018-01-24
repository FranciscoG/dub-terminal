/**
 * Snooze
 * mute until current song is finished
 * a Dub+ feature
 */

const metadata = {
  command: "snooze"
};
export default function() {
  let $btn = $('.snooze_btn');
  let $mute = $('.mute');
  let result = {};

  if (!$mute.hasClass('sound-muted')) {
    $btn.trigger('click');
    result.success = 'snooze current song ON';
  } else {
    result.warning = 'mute is already on. if you did not turn it on via snooze, unmute before snoozing';
  }

  return Promise.resolve( Object.assign({}, metadata, result) );
}