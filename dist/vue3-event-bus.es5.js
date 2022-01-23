import{onUnmounted as n}from"vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var t=new(function(){function n(){this.eventMap=new Map}return n.prototype.on=function(n,t){var e=this.eventMap.get(n);e||(e=[]),e.push(t),this.eventMap.set(n,e)},n.prototype.emit=function(n,t){var e=this,o=this.eventMap.get(n);Array.isArray(o)&&o.forEach((function(o){o(t),o.isOnce&&e.off(n,o)}))},n.prototype.once=function(n,t){t.isOnce=!0,this.on(n,t)},n.prototype.off=function(n,t){var e=this.eventMap.get(n);if(Array.isArray(e))if(t){var o=function(n,t,e){if(e||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return n.concat(o||Array.prototype.slice.call(t))}([],e,!0),i=o.indexOf(t);i>-1&&o.splice(i,1),this.eventMap.set(n,o)}else this.eventMap.delete(n)},n}()),e=function(){var e={eventMap:new Map,on:t.on,once:t.once,clear:function(){this.eventMap.forEach((function(n,e){n.forEach((function(n){t.off(e,n)}))}))}};return n((function(){e.clear()})),{on:function(n,o){e.on(n,o),t.on(n,o)},once:function(n,o){e.once(n,o),t.once(n,o)},off:t.off.bind(t),emit:t.emit.bind(t)}};export{e as default,e as useEventBus};
//# sourceMappingURL=vue3-event-bus.es5.js.map
