<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <header class="header font-display text-[20px] w-full absolute flex justify-center border-[#fafafa] shadow md:text-[40px] items-center bg-[white] h-[60px]">
    <div v-if="route.fullPath!=='/'" class="absolute left-3 top-[19px] cursor-pointer">
      <RouterLink to="/">
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>
      </RouterLink>
    </div>
    <div v-else class="absolute right-3 top-[19px] cursor-pointer">
      <RouterLink to="/about">
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </RouterLink>
    </div>

    <h3>{{ route.fullPath!=='/'? route.name:'TODO APP' }}</h3>
  </header>
</template>
