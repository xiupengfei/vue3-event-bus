/*
 * @Descripttion: Event Bus
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:49:52
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 17:18:09
 */

export interface ICallbackFun extends Function {
  __once?: Function
  isOnce?: boolean
}

class EventBus {
  constructor() {
    this.eventMap = new Map()
  }

  eventMap: Map<string, ICallbackFun[]>

  on(key: string, cb: ICallbackFun) {
    let handles = this.eventMap.get(key)
    if (!handles) {
      handles = []
    }
    handles.push(cb)
    this.eventMap.set(key, handles)
  }

  private _emit(key: string, payload?: any) {
    const handles = this.eventMap.get(key)
    if (!Array.isArray(handles)) return
    handles.forEach((h) => {
      h(payload)
      if (h.isOnce) {
        this.off(key, h)
      }
    })
  }

  emit(key: string, payload?: any) {
    key ??= key.trim()

    if (key === '*') {
      ;[...this.eventMap.keys()].forEach((k) => {
        this._emit(k, payload)
      })
    } else if (key.startsWith('*')) {
      const _key = key.substring(1)
      ;[...this.eventMap.keys()]
        .filter((k) => k.endsWith(_key))
        .forEach((k) => {
          this._emit(k, payload)
        })
    } else if (key.endsWith('*')) {
      const _key = key.slice(0, -1)
      ;[...this.eventMap.keys()]
        .filter((k) => k.startsWith(_key))
        .forEach((k) => {
          this._emit(k, payload)
        })
    } else {
      this._emit(key, payload)
    }
  }

  once(key: string, cb: ICallbackFun) {
    cb.isOnce = true
    this.on(key, cb)
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
  }

  off(key: string, cb?: ICallbackFun) {
    const handles = this.eventMap.get(key)
    if (!Array.isArray(handles)) return

    if (cb) {
      const _handles = [...handles]
      const idx = _handles.indexOf(cb)
      idx > -1 && _handles.splice(idx, 1)
      this.eventMap.set(key, _handles)
    } else {
      this.eventMap.delete(key)
    }
  }
}

export const bus = new EventBus()

export default EventBus
