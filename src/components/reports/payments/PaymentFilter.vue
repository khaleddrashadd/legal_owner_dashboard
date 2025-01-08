<template>
  <div class="px-4 py-3 rounded-xl border border-ivory-200 bg-white">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div class="flex flex-col gap-2">
        <label for="" class="font-semibold text-sm text-ivory-900">رقم سداد</label>
        <InputNumber placeholder="ادخل رقم سداد" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="" class="font-semibold text-sm text-ivory-900">اسم المستفيد</label>
        <InputText />
      </div>
      <div class="flex flex-col gap-2">
        <label for="" class="font-semibold text-sm text-ivory-900">تاريخ الدفع</label>
        <DatePicker
          pt:pcInputText:root="p-3 text-sm"
          inputId="date"
          v-model="dates"
          @hide="onHide"
          placeholder="DD/MM/YYYY إلى DD/MM/YYYY"
          selectionMode="range"
          :manualInput="false"
          hideOnRangeSelection
          showButtonBar
          :max-date="new Date()"
          pt:pcPrevButton:root="text-secondary-500 rtl:rotate-180"
          pt:pcNextButton:root="text-secondary-500 rtl:rotate-180"
          pt:pcClearButton:root="text-secondary-500"
          pt:pcTodayButton:root="text-secondary-500"
          pt:buttonbar="border-secondary-50"
        />
      </div>
    </div>
    <div class="flex items-center justify-end gap-2 mt-4">
      <Button label="بحث" />
      <Button label="بحث" />
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import utc from 'dayjs/plugin/utc';
import { ref } from 'vue';
import Button from 'primevue/button';

dayjs.extend(utc);

const dates = ref([]);

const onHide = () => {
  const time = dayjs(dates.value?.[1]);
  if (!time.isValid()) {
    dates.value[1] = dates.value[0];
  }
};
</script>
