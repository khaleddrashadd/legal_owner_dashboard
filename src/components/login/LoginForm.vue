<template>
  <div class="grid place-items-center min-h-screen md:grid-cols-2 relative">
    <div class="flex items-center justify-center flex-col px-3">
      <div class="mb-16 xs:w-[343px] h-[66px] w-full">
        <img :src="logoImg" alt="city" class="h-full" />
      </div>
      <div class="text-center">
        <h2 class="mb-8 font-semibold text-ivory-950 text-xl">
          تسجيل الدخول إلى حسابك في نظام ملاك المحافظ
        </h2>
        <Button
          @click="login"
          label="سجل دخول بإستخدام Windows Azure AD"
          class="rounded-md mb-4 block py-4 md:px-9 lg:px-12"
        />
        <span class="text-sm font-semibold text-ivory-900">تفقد الشروط والأحكام</span>
      </div>
      <small
        class="absolute rtl:right-6 ltr:left-6 bottom-6 text-xs max-w-[calc(100%-3rem)] md:max-w-[calc(50%-3rem)]"
        >@{{ currentYear }} جميع الحقوق محفوظة للشركة الوطنية المساندة لخدمات التمويل</small
      >
    </div>
    <div class="h-full hidden md:block">
      <img :src="cityImg" alt="city" class="h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import cityImg from '@/assets/images/city.jpeg';
import logoImg from '@/assets/images/logo.png';
import { Auth } from '@/libs/msal';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const login = async () => {
  try {
    await Auth.login();
    router.push({ name: 'home' });
  } catch (error) {
    console.error(error);
  }
};
const currentYear = computed(() => new Date().getFullYear());
</script>
