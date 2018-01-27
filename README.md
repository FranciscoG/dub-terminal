# Dub-Terminal

a CLI-like interface for Dubtrack right within the page.  Because sometimes you don't feel like clicking on things

## Browser Requirements

I'm making heavy use of [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility) **without a polyfill**. Most _modern_ browsers have been supporting it for some time:
```
Chrome 32+        - current version: 63    
FireFox 29+       - current version: 58    
Safari 8+         - current version: 11    
Opera 19+         - current version: 50    
Edge ¯\_(ツ)_/¯   - MDN says "Yes" so you should be fine I guess 

Internet Explorer - Not supported.
```

## Commands

grab [play_list_name] - grabs the current song and puts it in the playlist provided

mute - turns ON mute

snooze - mutes only the current song, does not work if mute is already on

unmute - turns OFF mute and cancels snooze if on

playlists - list your playlists

playlists [name] - create a new playlist

afk - toggle  Dub+ AFK option

afk [message] - update your AFK message

### Also

Pressing up/down traverses through history of commands (last 30)

more commands to come!


## Development

requires NodeJS 

`npm install` dependencies

uses [Rollup.js](https://rollupjs.org/guide/en) for bundling and building

[Sass](http://sass-lang.com/) for css

## Extensions Development

`npm run ext:build` - build the Chrome and Firefox individual extension folders

`npm run start:firefox` - uses `web-ext` to begin a new instance of FF with the extension loaded

`npm run ext:icons` - generate all the icons from the single largest 128x128 icon file 128.png

`npm run ext:zip` - zip up the Chrome and Firefox extensions folders to prepare for deployment

`npm run ext:deploy` - deploy both extensions via their respective APIs
