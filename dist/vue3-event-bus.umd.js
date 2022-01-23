!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).vue3EventBus={},e.vue)}(this,(function(e,n){"use strict";
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
    ***************************************************************************** */var t=function(){function e(){this.eventMap=new Map}return e.prototype.on=function(e,n){var t=this.eventMap.get(e);t||(t=[]),t.push(n),this.eventMap.set(e,t)},e.prototype.emit=function(e,n){var t=this,o=this.eventMap.get(e);Array.isArray(o)&&o.forEach((function(o){o(n),o.isOnce&&t.off(e,o)}))},e.prototype.once=function(e,n){n.isOnce=!0,this.on(e,n)},e.prototype.off=function(e,n){var t=this.eventMap.get(e);if(Array.isArray(t))if(n){var o=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,f=n.length;i<f;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))}([],t,!0),i=o.indexOf(n);i>-1&&o.splice(i,1),this.eventMap.set(e,o)}else this.eventMap.delete(e)},e}(),o=new t,i=function(){var e={eventMap:new Map,on:o.on,once:o.once,clear:function(){this.eventMap.forEach((function(e,n){e.forEach((function(e){o.off(n,e)}))}))}};return n.onUnmounted((function(){e.clear()})),{on:function(n,t){e.on(n,t),o.on(n,t)},once:function(n,t){e.once(n,t),o.once(n,t)},off:o.off.bind(o),emit:o.emit.bind(o)}};e.default=i,e.useEventBus=i,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=vue3-event-bus.umd.js.map
