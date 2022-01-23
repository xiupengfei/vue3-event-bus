<!--
 * @Descripttion: 
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:47:15
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 17:12:24
-->
<template>
  <div>Example</div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

import useEventBus from '../../lib/vue3-event-bus'
// import useEventBus from '@xiupengfei/vue3-event-bus'

export default defineComponent({
  name: 'Example2',
  setup() {
    const { on, once, off } = useEventBus()
    const handleEvent1 = (data: any) => {
      console.log('多次监听event2-1', data)
    }

    const handleEvent2 = (data: any) => {
      console.log('多次监听event2-2', data)
    }

    const handleEventOnce = (data: any) => {
      console.log('一次监听event2-once', data)
    }
    // bus.on('event', handleEvent1)
    on('event2-e', handleEvent2)
    once('event2-e', handleEventOnce)

    // onUnmounted(() => {
    //   off('event', handleEvent2)
    //   off('event', handleEventOnce)
    // })
  },
})
</script>
