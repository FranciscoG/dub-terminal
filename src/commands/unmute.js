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

  return new Promise(function(resolve,reject) {
    if ($btn.hasClass('sound-muted')) {
      $btn.trigger('click');
      result.success = 'mute OFF';
      resolve(Object.assign({}, metadata, result))
    } else {
      reject('mute is not on');
    }
  });
  
}