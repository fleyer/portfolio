<script setup lang="ts">
const { data: skillsData } = await useAsyncData('skills', () => {
  return queryCollection('skills').first()
})

if (!skillsData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const categoryColorMap = computed(() => {
  if (!skillsData.value) return new Map<string, string>()
  const categories = [...new Set(skillsData.value.skills.flatMap(s => s.category))]
  const map = new Map<string, string>()
  const goldenRatio = 0.618033988749895
  let hue = 0.08
  for (const cat of categories) {
    hue = (hue + goldenRatio) % 1
    map.set(cat, `hsl(${Math.round(hue * 360)}, 60%, 50%)`)
  }
  return map
})

const allCategories = computed(() => [...categoryColorMap.value.keys()])

const activeFilters = ref(new Set<string>())

function toggleFilter(category: string) {
  const next = new Set(activeFilters.value)

  if (next.has(category)) next.delete(category)
  else next.add(category)

  activeFilters.value = next
}

const filteredSkills = computed(() => {
  if (!skillsData.value) return []
  if (activeFilters.value.size === 0) return skillsData.value.skills
  return skillsData.value.skills.filter(s =>
    s.category.some(c => activeFilters.value.has(c))
  )
})

function filterPillStyle(category: string) {
  return activeFilters.value.has(category)
    ? 'solid'
    : 'outline'
}
</script>

<template>
  <UPageSection
    v-if="skillsData"
    :ui="{
      title: 'text-left',
      container: '!pt-0 flex flex-col gap-8 w-full'
    }"
  >
    <template #title>
      <LandingTitle>
        {{ skillsData.title }}
      </LandingTitle>
    </template>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.1 }"
      :in-view-options="{ once: true }"
      class="flex flex-wrap gap-2"
    >
      <UBadge
        v-for="category in allCategories"
        :key="category"
        :variant="filterPillStyle(category)"
        class="cursor-pointer select-none transition-all"
        @click="toggleFilter(category)"
      >
        <ProseStrong>{{ category }}</ProseStrong>
      </UBadge>
    </Motion>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.2 }"
      :in-view-options="{ once: true }"
    >
      <TransitionGroup
        tag="div"
        class="flex flex-wrap gap-2"
        enter-active-class="transition-all duration-200"
        leave-active-class="transition-all duration-150 absolute"
        enter-from-class="opacity-0 scale-90"
        leave-to-class="opacity-0 scale-90"
      >
        <UBadge
          v-for="skill in filteredSkills"
          :key="skill.name"
        >
          <ProseStrong>{{ skill.name }}</ProseStrong>
        </UBadge>
      </TransitionGroup>
    </Motion>
  </UPageSection>
</template>
