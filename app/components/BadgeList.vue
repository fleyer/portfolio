<script setup lang="ts">
import type { Slots } from 'vue'

const badgeCmp = resolveComponent('UBadge')
const proseBold = resolveComponent('ProseStrong')
const slots = useSlots()

const DefaultSlot = defineComponent((_props) => {
  return () => {
    const text = extractText(slots.default!())
    const badges = text.split(',')
      .map(txt => h(badgeCmp, { id: txt, class: 'text-white' }, () => h(proseBold, () => txt)))

    return h('div', { class: 'flex flex-wrap gap-2' }, { default: () => badges })
  }
})

function extractText(nodes: VNode[]): string {
  let text = ''

  for (const node of nodes) {
    if (typeof node.children === 'string') {
      text += node.children
    } else if (typeof node.children === 'object') {
      text += extractText((node.children as unknown as Slots).default!())
    }
  }

  return text
}
</script>

<template>
  <DefaultSlot />
</template>
