<template>
  <li
    class="rounded-2xl duration-300 relative"
    :class="{
      'justify-center': !isSidebarOpen,
      'bg-primary-600 p-2': isListExpanded && !beta && isSidebarOpen
    }"
  >
    <div
      @click="handleExpandList"
      class="flex items-center px-2 py-2 cursor-pointer duration-300 hover:bg-secondary-400 hover:text-white rounded-2xl"
      :class="{
        'bg-secondary-400': routes.some((route) =>
          typeof route.to === 'string' ? $route.path === route.to : $route.name === route.to.name
        ),
        'w-max': !isSidebarOpen
      }"
    >
      <div class="flex gap-3 items-center w-full h-full rounded-2xl">
        <Icon class="fill-white w-6 h-6" />
        <span v-show="isSidebarOpen" class="text-sm font-semibold select-none">{{ title }}</span>
        <span
          class="text-sm font-semibold text-[#D7B40B] rounded-full px-2 bg-[#FFF8D4] rtl:-mr-2 ltr:-ml-2"
          v-if="beta && isSidebarOpen"
          >قريبا</span
        >
      </div>
      <ChevronIcon
        class="fill-white"
        :class="{ '-scale-y-100': isListExpanded }"
        v-if="isSidebarOpen"
      />
    </div>
    <ul
      class="flex flex-col"
      v-if="isListExpanded"
      :class="{
        'absolute right-full bg-primary-600 rounded-2xl top-0 before:absolute before:border-[10px] before:border-l-primary-600 before:border-r-transparent before:border-t-transparent before:border-b-transparent before:left-full before:top-4 before:rounded-lg':
          !isSidebarOpen,
        'p-2': routes.length
      }"
    >
      <router-link
        v-for="route in routes"
        :key="route?.title"
        :to="route?.to"
        exactActiveClass="text-secondary-200"
        class="block px-6 py-[10px] duration-300 hover:text-secondary-200 text-xs"
        >{{ route?.title }}</router-link
      >
    </ul>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue';
import ChevronIcon from '@/assets/icons/chevron.svg';
import { useRoute } from 'vue-router';

const isListExpanded = ref(false);
const { isSidebarOpen } = defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true
  },
  Icon: {
    type: Object,
    required: true
  },
  routes: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  handleOpenSidebar: {
    type: Function,
    required: false
  },
  beta: Boolean
});

const handleExpandList = () => {
  isListExpanded.value = !isListExpanded.value;
};
const route = useRoute();
watch(
  () => route.path,
  () => {
    if (!isSidebarOpen) isListExpanded.value = false;
  }
);
</script>

<style lang="scss" scoped></style>
