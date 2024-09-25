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

const classes = cn('w-full', props.class);
</script>