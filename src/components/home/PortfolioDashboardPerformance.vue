<template>
  <div class="h-[calc(100vh-138px)]" v-if="isEmbedded">
    <PowerBIReportEmbed
      :embed-config="reportConfig"
      :phased-embedding="false"
      css-class-name="h-full w-full"
      :event-handlers="eventHandlersMap"
      @report-obj="setReportObj"
    >
    </PowerBIReportEmbed>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { portfolioPerformanceReportId } from '../../../public/constants';
import { models } from 'powerbi-client';
import 'powerbi-report-authoring';

import { PowerBIReportEmbed } from 'powerbi-client-vue-js';
const isEmbedded = ref(true);

const reportConfig = ref({
  type: 'report',
  id: portfolioPerformanceReportId,
  embedUrl: '',
  tokenType: models.TokenType.Aad,
  accessToken: localStorage.getItem('accessToken'),
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: false
      },
      pageNavigation: {
        visible: false
      }
    }
  },
  pageView: 'fitToWidth'
});

const reportData = ref();
const eventHandlersMap = ref(
  new Map([
    ['loaded'],
    ['rendered', () => console.log('Report has rendered')],
    [
      'error',
      (event) => {
        if (event.detail.errorCode == 403) {
          // it means token is expired .. solution is to refresh the token
          console.log('TOKEN EXPIRED 🔃');
        }
        if (event.detail.errorCode == 401) {
          // it means token is invalid .. solution is redirect to login page
          //router.push({ name: 'login' });
          console.log('TOKEN INVALID 🚫');
        }
      }
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => console.log(event)]
  ])
);
const setReportObj = (value) => {
  console.log(value);
  reportData.value = value;
};
</script>
