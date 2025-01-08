<script setup>
import SidebarNav from '@/components/partials/SidebarNav.vue';
import AppHeader from '@/components/partials/AppHeader.vue';
import AppFooter from '@/components/partials/AppFooter.vue';
</script>

<template>
  <div
    class="grid bg-ivory-100 w-full grid-cols-[max-content,minmax(0,1fr)] grid-rows-[max-content,1fr,max-content]"
  >
    <SidebarNav class="col-start-1 col-span-1 row-start-1 row-span-2" />
    <AppHeader />
    <main class="row-start-2 row-span-1 col-start-2 col-span-1 w-full">
      <router-view></router-view>
    </main>
    <AppFooter class="row-start-3 row-span-1 col-start-1 col-span-2" />
  </div>
</template>

<style></style>
