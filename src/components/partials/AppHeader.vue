<template>
  <header
    class="px-6 py-3 shadow-sm flex items-center w-full top-0 justify-end bg-white gap-x-3 z-10"
  >
    <section class="flex items-center gap-x-4 bg-secondary-100 p-1 rounded-full">
      <div class="flex items-center gap-x-1">
        <div class="rounded-full border border-secondary-50">
          <img
            :src="redfLogo"
            alt="user photo"
            class="text-2xs object-cover w-10 h-10 rounded-full"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-2xs text-ivory-900">مرحباً</span>
          <h4 class="font-semibold text-sm text-ivory-950">REDF</h4>
        </div>
      </div>
      <div>
        <button class="rounded-full bg-secondary-400 p-[0.625rem]">
          <ChevronIcon class="fill-white" />
        </button>
      </div>
    </section>
    <ul class="flex items-center gap-x-3">
      <li>
        <button class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <NotificationIcon class="fill-primary-500 w-5 h-5" />
        </button>
      </li>
      <li>
        <button class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <CalendarIcon class="fill-primary-500 w-5 h-5" />
        </button>
      </li>
      <li>
        <button
          @click="isLogoutModalVisible = true"
          class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center"
        >
          <LogoutIcon class="fill-white w-5 h-5" />
        </button>
      </li>
    </ul>
  </header>
  <Dialog
    v-model:visible="isLogoutModalVisible"
    modal
    class="w-[31rem]"
    pt:content="px-6 py-8"
    pt:header="hidden"
  >
    <div class="flex flex-col gap-6 items-center">
      <div class="bg-primary-100 rounded-full p-8">
        <LogoutIcon class="fill-primary-500 w-[53px] h-[53px]" />
      </div>
      <h2 class="text-xl font-bold text-ivory-950">انت على وشك تسجيل الخروج من النظام</h2>
      <div class="flex flex-col gap-4 w-full">
        <Button label="نعم، سجل خروج" class="rounded-md" @click="handleLogout" />
        <Button
          outlined
          label="لا، ابق بالنظام"
          class="rounded-md"
          @click="isLogoutModalVisible = false"
        />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import NotificationIcon from '@/assets/icons/notification.svg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import LogoutIcon from '@/assets/icons/logout.svg';
import ChevronIcon from '@/assets/icons/chevron.svg';
import userPlaceHolder from '@/assets/images/user-placeholder.png';
import redfLogo from '@/assets/images/redf-logo.jpeg';
import srcLogo from '@/assets/images/src-logo.jpg';
import { Auth } from '@/libs/msal';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
import Button from 'primevue/button';

const isLogoutModalVisible = ref(false);

const handleLogout = async () => {
  await Auth.logout();
};
</script>
