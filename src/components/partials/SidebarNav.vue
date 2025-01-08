<template>
  <div class="relative min-h-screen" :class="{ 'w-52': isSidebarOpen, 'w-20': !isSidebarOpen }">
    <nav
      class="bg-primary-500 text-white duration-300 px-2 fixed z-50 min-h-screen"
      :class="{ 'w-52': isSidebarOpen, 'w-20': !isSidebarOpen }"
    >
      <div class="flex flex-col gap-10 py-4">
        <div class="text-center bg-white max-w-40 w-full mx-auto -translate-y-2">
          <LogoIcon class="max-w-40 w-full object-cover" />
        </div>
      </div>
      <ul class="flex flex-col gap-[10px] py-3 px-2">
        <li
          class="flex items-center duration-300 hover:bg-secondary-400 hover:text-white rounded-2xl"
          :class="{
            'justify-center w-max': !isSidebarOpen
          }"
        >
          <router-link
            exactActiveClass="bg-secondary-400"
            :to="{ name: 'home' }"
            class="flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2"
          >
            <HomeIcon class="w-6 h-6 fill-white" />
            <span v-show="isSidebarOpen" class="text-sm font-semibold">الرئيسية</span>
          </router-link>
        </li>
        <SidebarNavExpandableItem
          title="التقارير"
          :Icon="ReportIcon"
          :isSidebarOpen
          :routes="[
            { title: 'الاحصائيات', to: { name: 'statistics' } },
            { title: 'الدفعات', to: { name: 'payments' } },
            { title: 'الحسابات', to: { name: 'accounts' } },
            { title: 'التحصيل', to: { name: 'collections' } }
          ]"
          :handleOpenSidebar
        />
        <SidebarNavExpandableItem
          beta
          title="الخدمات"
          :Icon="AppsIcon"
          :isSidebarOpen
          :routes="[]"
          :handleOpenSidebar="handleOpenSidebar"
        />
      </ul>
      <button
        @click="isSidebarOpen = !isSidebarOpen"
        class="bg-ivory-50 rounded-md text-secondary-400 flex items-center justify-center absolute top-[60px] w-8 h-8 rtl:left-0 ltr:right-0 rtl:-translate-x-1/2 ltr:translate-x-1/2 shadow-sm z-99 p-2 rotate-0"
        :class="{ '!rotate-180': isSidebarOpen }"
      >
        <NavToggleIcon />
      </button>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import HomeIcon from '@/assets/icons/home.svg';
import ReportIcon from '@/assets/icons/report.svg';
import AppsIcon from '@/assets/icons/apps.svg';
import NavToggleIcon from '@/assets/icons/sidebar-toggle.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import SidebarNavExpandableItem from '@/components/partials/SidebarNavExpandableItem.vue';

const isSidebarOpen = ref(false);
const handleOpenSidebar = () => (isSidebarOpen.value = true);
</script>
