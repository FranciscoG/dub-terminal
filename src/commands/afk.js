/**
 * Turn on Dub+ AFK
 */

const metadata = {
  command: "afk"
};
export default function(data) {  
  return new Promise(function(resolve,reject){
    if (!dubplus) {
      let error = "Dub+ extension not found. Please install it: https://dub.plus";
      reject(error);
    }

    let result = {};

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
      let resultMsg = "";
      let switchState = document.querySelector('#dubplus-afk.dubplus-switch-on');
      let dpAfk = dubplus["dubplus-afk"];

      if (switchState) {
        dpAfk.turnOff();
        dpAfk.toggleAndSave("dubplus-afk", false);
        result.success = "AFK mode off";
      } else {
        dpAfk.turnOn();
        dpAfk.toggleAndSave("dubplus-afk", true);
        result.success = "AFK mode on" ;
      }
    }
    
    resolve( Object.assign({}, metadata, result) )
  });
}
