<template>
  <div class="px-2 md:px-6 md:mt-4 mt-2">
    <div class="flex justify-between md:items-center mb-4 flex-col md:flex-row gap-y-4">
      <h1 class="font-bold text-ivory-950 text-2xl">الإحصائيات</h1>
    </div>
    <div class="mb-4">
      <ReportItem title="a" value="b" :Icon="DocumentValidIcon" align="horizontal" />
    </div>
    <div>
      <PaymentFilter />
    </div>
  </div>
</template>

<script setup>
import ReportItem from '@/components/reports/ReportItem.vue';
import DocumentValidIcon from '@/assets/icons/document-valid.svg';
import PaymentFilter from '@/components/reports/payments/PaymentFilter.vue';
</script>

<style lang="scss" scoped></style>
