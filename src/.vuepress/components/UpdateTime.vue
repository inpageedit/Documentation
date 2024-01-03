<template>
  <time :datetime="computedDate.toISOString()">{{ formatedStr }}</time>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    date?: string | number | Date
  }>(),
  {
    date: undefined,
  }
)

const computedDate = computed(() => {
  return props.date ? new Date(props.date) : new Date()
})
const formatedStr = computed(() => {
  if (Intl) {
    return new Intl.DateTimeFormat('default', {
      dateStyle: 'medium',
      timeStyle: 'medium',
    }).format(computedDate.value)
  } else {
    return computedDate.value.toLocaleDateString()
  }
})
</script>
