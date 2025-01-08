<template>
  <div class="px-2 md:px-6 md:mt-4 mt-2">
    <div class="flex justify-between md:items-center mb-4 flex-col md:flex-row gap-y-4">
      <h1 class="font-bold text-ivory-950 text-2xl">الإحصائيات</h1>
      <div>
        <StatisticsFilter
          v-model:filterLegalOwner="filterLegalOwner"
          v-model:filterDate="filterDate"
        />
      </div>
    </div>
    <StatisticsReports />
  </div>
</template>

<script setup>
import StatisticsFilter from '@/components/reports/statistics/StatisticsFilter.vue';
import StatisticsReports from '@/components/reports/statistics/StatisticsReports.vue';
import { ref } from 'vue';

const filterLegalOwner = ref();
const filterDate = ref();
</script>
