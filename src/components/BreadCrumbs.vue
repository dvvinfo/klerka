<script lang="ts" setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import IconArrow from './icons/IconArrow.vue'

const props = defineProps<{
  breadCrumbs: { title: string; href: string; icon: boolean } []
}>()
const { breadCrumbs } = toRefs(props)
</script>

<template>
  <ul class="flex items-center gap-2 max-w-max flex-wrap p-2">
    <li v-for="item in breadCrumbs" :key="item.title" class="">
      <router-link
        :to="item.href"
        class="flex items-center gap-2 text-custom-gray text-custom-xxs "
        ><span class="leading-4">{{ item.title }}</span
        ><IconArrow v-if="item.icon"
      /></router-link>
    </li>
  </ul>
</template>

<style></style>
