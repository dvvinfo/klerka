<script setup lang="ts">
import { toRefs } from 'vue'
const emit = defineEmits(['update:value'])

const props = defineProps<{
  name?: string
  type?: string
  placeholder?: string
  value?: string
}>()

const { name, type, placeholder, value } = toRefs(props)

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:value', target.value)
}
</script>

<template>
  <div class="form-input">
    <input
      class="bg-white input-text text-base text-custom-gray-light rounded-lg p-4 w-full border-none outline-none "
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
  </div>
</template>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  @apply transition-opacity duration-500;
}
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
