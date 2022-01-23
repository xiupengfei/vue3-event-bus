"use strict";
/*
 * @Descripttion: Event Bus
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:49:52
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 15:07:19
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bus = void 0;
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.eventMap = new Map();
    }
    EventBus.prototype.on = function (key, cb) {
        var handles = this.eventMap.get(key);
        if (!handles) {
            handles = [];
        }
        handles.push(cb);
        this.eventMap.set(key, handles);
    };
    EventBus.prototype.emit = function (key, payload) {
        var _this = this;
        var handles = this.eventMap.get(key);
        if (!Array.isArray(handles))
            return;
        handles.forEach(function (h) {
            h(payload);
            if (h.isOnce) {
                _this.off(key, h);
            }
        });
    };
    EventBus.prototype.once = function (key, cb) {
        cb.isOnce = true;
        this.on(key, cb);
        // let handles = this.eventMap.get(key)
        // if (!handles) {
        //   handles = []
        // }
        // cb.__once = (payload?: any) => {
        //   cb(payload)
        //   this.off(key, cb)
        // }
        // handles.push(cb.__once)
        // this.eventMap.set(key, handles)
    };
    EventBus.prototype.off = function (key, cb) {
        var handles = this.eventMap.get(key);
        if (!Array.isArray(handles))
            return;
        if (cb) {
            var _handles = __spreadArray([], handles, true);
            var idx = _handles.indexOf(cb);
            idx > -1 && _handles.splice(idx, 1);
            this.eventMap.set(key, _handles);
        }
        else {
            this.eventMap.delete(key);
        }
    };
    return EventBus;
}());
exports.bus = new EventBus();
exports.default = EventBus;
//# sourceMappingURL=event-bus.js.map