<script setup lang="ts">
withDefaults(defineProps<{
  ui?: {
    default?: string
  }
}>(),
{
  ui: () => ({ default: 'pt-20' })
}
)
</script>

<template>
  <div :class="`text-left text-xl sm:text-xl lg:text-2xl font-medium ${ui.default}`">
    <slot name="default" />
  </div>
</template>
