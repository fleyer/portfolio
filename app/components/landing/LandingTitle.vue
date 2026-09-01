<script setup lang="ts">
withDefaults(defineProps<{
  ui?: {
    default?: string
  }
}>(),
{
  ui: () => ({ })
}
)
</script>

<template>
  <Motion
    :initial="{ opacity: 0 }"
    :while-in-view="{ opacity: 1 }"
    :transition="{
      duration: 0.6,
      delay: 0.9
    }"
    :in-view-options="{ once: true }"
  >
    <div :class="`text-left text-xl sm:text-xl lg:text-2xl font-medium ${ui.default}`">
      <slot name="default" />
    </div>
  </Motion>
</template>
