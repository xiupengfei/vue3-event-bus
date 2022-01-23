<!--
 * @Descripttion: 
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:47:15
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 15:55:51
-->
<template>
  <div>Example</div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

import useEventBus from '../../lib/vue3-event-bus'

export default defineComponent({
  name: 'Example',
  setup() {
    const { on, once, off } = useEventBus()
    const handleEvent1 = (data: any) => {
      console.log('多次监听event-1', data)
    }

    const handleEvent2 = (data: any) => {
      console.log('多次监听event-2', data)
    }

    const handleEventOnce = (data: any) => {
      console.log('一次监听event-once', data)
    }
    // bus.on('event', handleEvent1)
    on('event', handleEvent2)
    once('event', handleEventOnce)

    // onUnmounted(() => {
    //   off('event', handleEvent2)
    //   off('event', handleEventOnce)
    // })
  },
})
</script>
