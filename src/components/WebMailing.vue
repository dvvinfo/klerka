<script lang="ts" setup>
import { ref } from 'vue'
import AppLogo from './AppLogo.vue'
import BreadCrumbs from './BreadCrumbs.vue'
import AppTabs from './AppTabs.vue'
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'
import AppSwitch from './AppSwitch.vue'
import AppCard from './AppCard.vue'
import FooterLogo from './FooterLogo.vue'

const item = [
  {
    title: 'Хлебные крошки',
    href: '/',
    icon: true,
  },
  {
    title: 'Хлебные крошки',
    href: '/',
    icon: true,
  },
  {
    title: 'Хлебные крошки',
    href: '/',
    icon: false,
  },
]
const tabs = [
  { name: 'Рассылки', label: 'Рассылки' },
  { name: 'Соцсети', label: 'Соцсети' },
  { name: 'Мессенджеры', label: 'Мессенджеры' },
]

const cards = ref([
  {
    id: 1,
    subtitle: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description:
      'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    image: '/img/1.png',
    items: ['Новости для бухгалтеров, ИП и директора', 'Подборка статей за день'],
      
   
    number: 59342,
    subscribe: {
      id: '1',
      value: 'Новости для бухгалтеров, ИП и директора',
      checked: true,
    },
  },
  {
    id: 2,
    subtitle: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description:
      'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    image: '/img/2.png',
    items: ['Новости для бухгалтеров, ИП и директора', 'Подборка статей за день'],
    number: 59342,
    subscribe: {
      id: '2',
      value: 'Новости для бухгалтеров, ИП и директора',
      checked: false,
    },
  },
  {
    id: 3,
    subtitle: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description:
      'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    image: '/img/3.png',
    items: ['Новости для бухгалтеров, ИП и директора', 'Подборка статей за день'],
    number: 59342,
    subscribe: {
      id: '3',
      value: 'Новости для бухгалтеров, ИП и директора',
      checked: false,
    },
  },
  {
    id: 4,
    subtitle: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description:
      'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    image: '/img/4.png',
    items: ['Новости для бухгалтеров, ИП и директора', 'Подборка статей за день'],
    number: 59342,
    subscribe: {
      id: '4',
      value: 'Новости для бухгалтеров, ИП и директора',
      checked: false,
    },
  },
])

const email = ref('')
const switchActive = ref(false)

const selectedTab = ref('Рассылки')
const changeTab = (tabName: string) => {
  selectedTab.value = tabName
}
</script>

<template>
  <div class="max-w-[1024px] mx-auto py-12">
    <header>
      <AppLogo class="mx-auto" />
    </header>
    <BreadCrumbs class="mx-auto pt-6" :breadCrumbs="item" />
    <h1 class="text-center text-custom-56 font-medium leading-[72px] pt-6">
      Подписки «Клерка»
    </h1>
    <AppTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <div v-if="selectedTab === 'Рассылки'">
        <h2 class="text-center text-2xl font-bold">
          Выберите рассылки, которые подходят именно вам
        </h2>
        <div class="mt-6 flex items-center w-full relative">
          <AppInput
            class="w-[87%]"
            placeholder="Электронная почта"
            type="email"
            v-model:value="email"
          />
          <AppButton label="Подписаться" class="absolute right-0" />
        </div>
        <div class="mt-6">
          <AppSwitch
            label="Подписаться на рассылку"
            v-model:checked="switchActive"
            id="switch"
            name="switch"
            value="I like it"
          />
        </div>
        <div class="mt-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <AppCard
            v-for="card in cards"
            :key="card.id"
            :subtitle="card.subtitle"
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :number="card.number"
            :subscribe="card.subscribe"
            :items="card.items"
          />
        </div>
      </div>
      <div v-if="selectedTab === 'Соцсети'">Социальные сети</div>
      <div v-if="selectedTab === 'Мессенджеры'">Мессенджеры</div>
    </AppTabs>
    <footer class="pt-12">
      <FooterLogo class="mx-auto" />
    </footer>
  </div>
</template>

<style></style>
