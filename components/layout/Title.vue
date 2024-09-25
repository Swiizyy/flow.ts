<template>
  <Typography
    variant="h2"
    v-bind="props"
    :class="classes"
  >
    <slot />
  </Typography>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/typography/Typography.vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();

const classes = cn(props.class);
</script>