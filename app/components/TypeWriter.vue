<script setup lang="ts">
import { motion } from 'motion-v'

const props = withDefaults(defineProps<{ value?: string, values?: string[] }>(), { values: () => [] })
const index = ref(0)
const values = computed(() => {
  const values = props.value != null ? Array.from(props.value) : props.values

  return values.map(value => value.trim().split(''))
})
useIntervalFn(() => {
  index.value = (index.value + 1) % values.value.length
}, 5000)

const animate = { display: 'inline-block' }
const transition = (i: number) => ({ delay: i * 0.2 })
const initial = { display: 'none' }
</script>

<template>
  <div class="inline-flex">
    <pre class="mr-1">></pre>
    <div
      v-for="str, upperIndex in values"
      :key="upperIndex"
      class="inline-flex"
    >
      <div v-if="upperIndex === index">
        <motion.pre
          v-for="char, i in str"
          :key="char+i"
          :initial="initial"
          :animate="animate"
          :transition="transition(i)"
        >
          {{ char }}
        </motion.pre>
      </div>
    </div>
    <motion.pre
      class="ml-[-5px]"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ repeat: Infinity, duration: 0.5 }"
    >
      _
    </motion.pre>
  </div>
</template>
