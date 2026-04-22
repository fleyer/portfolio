<script setup lang="ts">
const { global } = useAppConfig()
const sendMail = () => {
  window.location.href = `mailto:${global.email}`
}
</script>

<template>
  <UButton @click="sendMail">
    Contact me <UIcon name="i-lucide-mail" />
  </UButton>
</template>
