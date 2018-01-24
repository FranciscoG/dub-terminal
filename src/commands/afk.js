/**
 * Turn on Dub+ AFK
 */

const metadata = {
  command: "afk"
};
export default function(data) {
  let result = {};

  if (!dubplus) {
    result.error = "dubplus not found. Install extension first: https://dub.plus";
    return Object.assign({}, metadata, result);
  }
  

  if (data && data.length > 0) {
    // we are updating the AFK message
    // for now I am doing this hacky way until I can
    // make changes to Dub+ to expose settings
    // and option saving.
    $("#dubplus-afk .extra-icon").trigger("click");
    $(".dp-modal textarea").val( data.join(' ') );
    setTimeout(function() {
      $("#dp-modal-confirm").trigger("click");
    }, 500);
    result.success = "new AFK message saved";

  } else {
    // toggling AFK
    let switchState = document.querySelector('#dubplus-afk.dubplus-switch-on');
    let dpAfk = dubplus["dubplus-afk"];
    if (switchState) {
      dpAfk.turnOff();
      dpAfk.toggleAndSave("dubplus-afk", false);
      result.success = "AFK mode off" ;
    } else {
      dpAfk.turnOn();
      dpAfk.toggleAndSave("dubplus-afk", true);
      result.success = "AFK mode on" ;
    }
  }

  return Object.assign({}, metadata, result);
}
