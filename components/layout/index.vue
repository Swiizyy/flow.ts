<template>
  <div
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed } from 'vue';

interface LayoutProps {
  size?: 'sm' | 'default' | 'lg';
  class?: string;
}

const props = defineProps<LayoutProps>();

const sizeClass = computed(() => ({
  'max-w-7xl': props.size === 'lg',
  'max-w-3xl': props.size === 'sm'
}));

const classes = cn(
  'm-auto mt-4 flex w-full max-w-4xl flex-wrap gap-4 px-4',
  sizeClass.value,
  props.class
);
</script>