<!--
 * @Descripttion: 
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:42:15
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 16:22:14
-->
<template>
  <div>
    <h1>Home</h1>
    <button @click="showExample = !showExample">Toggle</button>
    <button @click="handleMulClick">Trigger Mul</button>
    <button @click="handleOnceClick">Trigger2</button>
    <Example v-if="showExample" />
    <Example2 />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Example from '../components/Example.vue'
import Example2 from '../components/Example2.vue'

// import useEventBus from '../../lib/vue3-event-bus'
import useEventBus from '@xiupengfei/vue3-event-bus'

const { emit } = useEventBus()

const showExample = ref(true)

const handleMulClick = () => {
  emit('event', {
    a: 1,
    b: 2,
  })
}

const handleOnceClick = () => {
  emit('event2', {
    a: 1111,
    b: 2,
  })
}
</script>
