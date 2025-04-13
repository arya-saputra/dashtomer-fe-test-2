<template>
  <section class="body pt-[4rem] min-h-screen flex justify-center items-center">
    <div class="text-center leading-7 text-sm text-gray-600">
      To Do App.<br />
      Created by M. Arya Yudha Saputra<br />
      Powered by Vue 3, Pinia, Vue Router & Tailwindcss<br />
      &copy; {{ year }}
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const year = ref(new Date().getFullYear())
</script>
