<template>
  <div
    class="relative overflow-hidden flex items-center gap-3 bg-white rounded-md rtl:border-r-4 rtl:border-secondary-400 shadow-sm py-4 px-[1.125rem]"
  >
    <div class="bg-[#e7f7f4] p-4 rounded">
      <component :is="Icon" class="fill-secondary-400 w-8 h-8" />
    </div>
    <div :class="`flex ${align === 'vertical' ? 'flex-col gap-[0.125rem]' : 'gap-4 items-center'}`">
      <span class="text-2xl text-ivory-950 font-semibold">{{ value }}</span>
      <span class="text-lg text-ivory-700">{{ title }}</span>
    </div>
    <div class="absolute rtl:-left-4 ltr:-right-4 -bottom-6">
      <component :is="Icon" class="fill-[#DBF3EF] w-16 h-16" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  Icon: {
    type: Object,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: 'vertical'
  }
});
</script>
