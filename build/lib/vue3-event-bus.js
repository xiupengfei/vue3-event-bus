"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventBus = void 0;
/*
 * @Descripttion: useEventBus
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:11:18
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 15:50:55
 */
var vue_1 = require("vue");
var event_bus_1 = require("./event-bus");
var useEventBus = function () {
    var instance = {
        eventMap: new Map(),
        // 复用eventBus事件收集相关逻辑
        on: event_bus_1.bus.on,
        once: event_bus_1.bus.once,
        // 清空eventMap
        clear: function () {
            this.eventMap.forEach(function (list, key) {
                list.forEach(function (cb) {
                    event_bus_1.bus.off(key, cb);
                });
            });
            // eventMap.clear()
        },
    };
    // const eventMap: Map<string, ICallbackFun[]> = new Map()
    var on = function (key, cb) {
        instance.on(key, cb);
        event_bus_1.bus.on(key, cb);
    };
    var once = function (key, cb) {
        instance.once(key, cb);
        event_bus_1.bus.once(key, cb);
    };
    (0, vue_1.onUnmounted)(function () {
        instance.clear();
    });
    return {
        on: on,
        once: once,
        off: event_bus_1.bus.off.bind(event_bus_1.bus),
        emit: event_bus_1.bus.emit.bind(event_bus_1.bus),
    };
};
exports.useEventBus = useEventBus;
exports.default = exports.useEventBus;
//# sourceMappingURL=vue3-event-bus.js.map