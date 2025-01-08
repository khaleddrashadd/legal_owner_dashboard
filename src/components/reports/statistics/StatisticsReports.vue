<template>
  <div class="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-x-6 gap-y-4">
    <ReportItem title="a" value="b" :Icon="DocumentValidIcon" />
    <ReportItem title="a" value="b" :Icon="DocumentValidIcon" />
    <ReportItem title="a" value="b" :Icon="DocumentValidIcon" />
    <ReportItem title="a" value="b" :Icon="DocumentValidIcon" />
  </div>
</template>

<script setup>
import ReportItem from '../ReportItem.vue';
import DocumentValidIcon from '@/assets/icons/document-valid.svg';
</script>
