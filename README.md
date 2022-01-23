# vue3 event bus

```typescript
// 使用
import useEventBus from '@xiupengfei/vue3-event-bus'

// 在setup中
const { emit, on, once, off } = useEventBus()

// on 监听
on('event-name', handle)

// once 仅触发一次
once('event-name', handle)

// off 解绑监听
// 解绑某个event-name handle
off('event-name', handle)
// 解绑全部event-name handle
off('event-name')

// emit 触发
emit('event-name', payload)
```

通常情况下需要在`onUnmounted` 钩子中进行事件的解绑, 现使用`vue3-event-bus` 无需进行手动解绑。
