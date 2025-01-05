<!-- CustomToast.vue -->
<script setup>
import { useToast } from 'vue-toastification';
import CheckCircle from '@/assets/icons/check-circle.svg';
import ErrorIcon from '@/assets/icons/error-icon.svg';
import ExitIcon from '@/assets/icons/exit-icon.svg';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  toastId: {
    type: [String, Number],
    required: true
  }
});

const toast = useToast();

const closeToast = () => {
  toast.dismiss(props.toastId);
};
</script>

<template>
  <div class="custom-toast" :class="type">
    <div class="toast-header">
      <CheckCircle v-show="type === 'success'" />
      <ErrorIcon v-show="type === 'error'" />
      <div class="content">
        <h4>{{ title }}</h4>
        <p v-show="message">{{ message }}</p>
      </div>
      <button class="w-6 h-6 flex justify-center items-center" @click="closeToast">
        <ExitIcon class="w-3 h-3" />
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.toast-header {
  @apply grid gap-3 items-start;

  grid-template-columns: max-content 1fr max-content;
}

.content {
  @apply flex flex-col gap-2;
}

.content h4 {
  @apply text-sm font-semibold text-ivory-950 leading-6 flex gap-2;

  svg {
    @apply w-3 h-3;
  }
}

.content p {
  @apply text-sm leading-6 text-ivory-850;
}
</style>
