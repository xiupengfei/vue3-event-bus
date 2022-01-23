/*
 * @Descripttion: useEventBus
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:11:18
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 15:50:55
 */
import { onUnmounted } from 'vue'
import { bus, ICallbackFun } from './event-bus'

export const useEventBus = () => {
  const instance = {
    eventMap: new Map(),
    // 复用eventBus事件收集相关逻辑
    on: bus.on,
    once: bus.once,
    // 清空eventMap
    clear() {
      this.eventMap.forEach((list: ICallbackFun[], key: string) => {
        list.forEach((cb) => {
          bus.off(key, cb)
        })
      })
      // eventMap.clear()
    },
  }

  // const eventMap: Map<string, ICallbackFun[]> = new Map()

  const on = (key: string, cb: ICallbackFun) => {
    instance.on(key, cb)
    bus.on(key, cb)
  }

  const once = (key: string, cb: ICallbackFun) => {
    instance.once(key, cb)
    bus.once(key, cb)
  }

  onUnmounted(() => {
    instance.clear()
  })

  return {
    on,
    once,
    off: bus.off.bind(bus),
    emit: bus.emit.bind(bus),
  }
}

export default useEventBus
