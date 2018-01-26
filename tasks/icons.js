/****************************************************
 * Generate all of the extension icons from one file
 * 
 * Create an icon at the largest required icon size: 128x128
 * This will create all of the smaller icons resized from that
 * file
 * 
 * According to Google's extenions documentation, the most common
 * icon sizes are:
 * 16x16
 * 32x32
 * 48x48
 * 128x128
 * 
 * https://developer.chrome.com/apps/manifest/icons
 */
const sharp = require('sharp');
const log = require('./colored-console.js');

module.exports = function makeIcons(){
  [
    16,
    32,
    48
  ].forEach((size)=>{
    sharp(process.cwd() + '/extensions/common/icons/128.png')
    .resize(size, size)
    .toFile(process.cwd() + '/extensions/common/icons/'+size+'.png', (err, info) =>{
      if (err) {
        log.error('icon generate error', err)
      }
      if (info) {
        log.info(info);
      }
    });
  });
}