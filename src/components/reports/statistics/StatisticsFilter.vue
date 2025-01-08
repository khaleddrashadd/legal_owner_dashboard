<template>
  <div class="flex items-center gap-4">
    <div class="flex flex-col md:w-44 w-full">
      <span class="text-sm text-ivory-700 -translate-x-1 translate-y-2 z-10 px-2 bg-ivory-100 w-max"
        >المحفظة</span
      >
      <Select
        v-model="selectedLegalOwner"
        :options="[
          { id: 1, name: 'a' },
          { id: 2, name: 'b' },
          { id: 3, name: 'c' }
        ]"
        placeholder="اختر المحفظة"
        pt:dropDown="text-primary-500"
        pt:label="px-2 py-[0.625rem] text-sm"
        option-label="name"
        option-value="id"
        pt:root="w-full border border-primary-100"
      />
    </div>
    <div class="flex flex-col md:w-44 w-full">
      <span class="text-sm text-ivory-700 -translate-x-1 translate-y-2 z-10 px-2 bg-ivory-100 w-max"
        >التاريخ</span
      >
      <DatePicker
        inputId="date"
        v-model="selectedDate"
        placeholder="MM/YYYY"
        :manualInput="false"
        hideOnRangeSelection
        dateFormat="mm/yy"
        showButtonBar
        :max-date="new Date()"
        pt:pcInputText:root="p-3 text-sm border border-primary-100 cursor-pointer rounded-sm"
        pt:pcPrevButton:root="text-secondary-500 rtl:rotate-180"
        pt:pcNextButton:root="text-secondary-500 rtl:rotate-180"
        pt:pcClearButton:root="text-secondary-500"
        pt:pcTodayButton:root="text-secondary-500"
        pt:root="relative rounded-sm"
        pt:dropdown="bg-transparent absolute rtl:left-0 ltr:right-0 top-1/2 transform -translate-y-1/2"
        pt:buttonbar="border-secondary-50"
        view="month"
        showIcon
      >
        <template #inputicon="slotProps">
          <i class="pi pi-clock" @click="slotProps.clickCallback" />
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<script setup>
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
/**
define a ref called filterLegalOwner & fliterDate in parent in required
 */
const selectedLegalOwner = defineModel('filterLegalOwner');
const selectedDate = defineModel('filterDate');
</script>

<style lang="scss" scoped></style>
