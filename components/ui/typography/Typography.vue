<template>
  <component
    :is="as"
    :class="classes"
    v-bind="props"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import {
  defaultElementMapping,
  typographyVariants,
  type TypographyElementKeys,
  type TypographyVariants,
} from "@/components/ui/typography";
import { cn } from "~/lib/utils";

interface TypographyProps {
  variant?: TypographyVariants["variant"];
  as?: TypographyElementKeys;
  class?: string;
}

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: "default",
  as: "default",
});

const classes = cn(typographyVariants({ variant: props.variant }), props.class);

const as = defaultElementMapping[props.as]
</script>
