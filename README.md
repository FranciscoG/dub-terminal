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

snooze - mutes only the current song

unmute - turns OFF mute and cancels snooze if on

playlists - list your playlists

afk - toggle  Dub+ AFK option

fullscreen - toggle  Dub+ fullscreen option



## Development

requires NodeJS 

`npm install` dependencies

uses [Rollup.js](https://rollupjs.org/guide/en) for bundling and building

[Sass](http://sass-lang.com/) for css

All **commands** must exported as a function which returns a `Promise` or `Promise.resolve` or `Promise.reject`

Promise resolves must contain an object as an argument with the following keys
```
{
  command: 'afk',  // metadata, the command that was just triggered
  success: 'a success message to be displayed in the output',
  warning: 'or an optional warning message'
}
```

Promise rejects should just return a string that will be displayed in the results output.