<script setup lang="ts">
import DHeader from '../components/DHeader.vue';
</script>
<template>
  <section class="w-full md:w-[480px] mx-auto overflow-y-scroll h-screen bg-[#fafafa] relative">
    <DHeader></DHeader>
    <slot />
  </section>
</template>
