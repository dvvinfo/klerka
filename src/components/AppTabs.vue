<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps<{
  names: { name: string; label: string }[]
  selectedTab: string
}>()
const emit = defineEmits(['changeTab'])

const { names, selectedTab } = toRefs(props)

const clickOnTab = (tabName: string): void => {
  emit('changeTab', tabName);
}
</script>

<template>
  <div class="tab-nav flex items-center gap-6 mx-auto w-max mt-6">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', { selected: tab.name === selectedTab }]"
      @click="clickOnTab(tab.name)"
    >
      {{ tab.label }}
    </span>
  </div>
  <div class="bg-custom-white py-12 px-6">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.tab-nav__item {
  @apply flex items-center gap-2 justify-center text-base pb-4 text-custom-gray-light hover:text-custom-gray transition-colors duration-300 cursor-pointer;
  &.selected {
    @apply text-custom-blue-light border-b border-custom-blue;
  }
}
</style>
