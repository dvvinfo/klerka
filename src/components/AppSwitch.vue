<script setup lang="ts">
import { toRefs } from 'vue'
const emits = defineEmits(['update:checked'])

const props = defineProps<{
  name?: string
  id: string
  value: string
  label?: string
  checked: boolean
}>()

const { name, id, value, label, checked } = toRefs(props)

const handleClickSwitch = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:checked', target.checked)
}

</script>

<template>
  <div class="switch-container">
    <input
      class="switch"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      @input="handleClickSwitch($event)"
    />
    <label :for="id"></label>
    <label class="switch__label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &-container {
    display: flex;
    align-items: center;
  }
  &__label {
    margin-left: 8px;
  }
  & + label {
    
    cursor: pointer;
    text-indent: -9999px;
    width: 48px;
    height: 24px;
    background: #DCDCDC;
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 1px;
      width: 22px;
      height: 22px;
      background: #fff;
      border-radius: 50%;
      transition: 0.3s;
      transform: translateY(-50%);
    }
  }
  &:checked {
    & + label {
      background: #316FEE;
      &:after {
        background: #fff;
        left: calc(100% - 1px);
        transform: translateX(-100%) translateY(-50%);
      }
      &:active:after {
        width: 30px;
      }
    }
  }
}
</style>
