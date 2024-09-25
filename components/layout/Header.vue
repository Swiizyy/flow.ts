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

const props = defineProps<{
  class?: string;
}>();

const classes = cn('flex w-full min-w-[200px] flex-col items-start gap-2 md:flex-1', props.class);
</script>