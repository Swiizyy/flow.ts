<template>
  <div class="flex min-h-full flex-col">
    <div className="min-h-full flex-1 pb-16 pt-8 lg:pt-12">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue';
</script>
