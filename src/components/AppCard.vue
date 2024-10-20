<script lang="ts" setup>
import { toRefs } from 'vue'
import IconCheck from './icons/IconChecked.vue'
import AppSwitch from './AppSwitch.vue'
const props = defineProps<{
  subtitle: string
  title: string
  description: string
  image: string
  items:string[]
  number: number
  subscribe:{
    checked: boolean,
    id: string,
    value: string 
}
}>()
const { subtitle, title, description, image, items, number, subscribe} =
  toRefs(props)
</script>
<template>
  <div class="card p-6 bg-white rounded-[16px] flex gap-6">
    <div class="">
      <span class="text-custom-xxs font-medium text-custom-gray">{{
        subtitle
      }}</span>
      <h3 class="text-xl font-medium mb-2">{{ title }}</h3>
      <p class="text-custom-gray-light text-sm">{{ description }}</p>
      <div class="mt-4 flex flex-col items-start gap-2">
        <div
          class="flex items-center  gap-2"
          v-for="(item, index) in items"
          :key="index"
        >
          <IconCheck /><span class="text-sm">{{ item }}</span>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <AppSwitch
          v-model:checked="subscribe.checked"
          :id="subscribe.id"
          :value="subscribe.value"
        />
        <span class="text-sm">Уже получает {{ number }} человек</span>
      </div>
    </div>
    <div class=" w-[80px] h-[80px] shrink-0">
      <img class="w-full object-cover" :src="image" alt="" />
    </div>
  </div>
</template>

<style></style>
