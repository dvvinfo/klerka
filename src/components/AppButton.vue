<script setup lang="ts">
import { toRefs } from "vue";

 
const props = defineProps<{
  label: string
  disabled?: boolean
}>()

const { label, disabled  } = toRefs(props)
const emit = defineEmits(["testClick"])


const clickOnButton = () => {
    emit('testClick')
}


</script>

<template>
  <button
  class=" px-8 py-4 bg-custom-blue text-base text-white rounded-[100px] cursor-pointer border-none"
    :disabled="disabled"
    @click="clickOnButton"
  >
    {{ label }}
  </button>
</template>

<style lang="postcss" scoped>
.disabled {
    @apply opacity-50 cursor-not-allowed
}
</style>