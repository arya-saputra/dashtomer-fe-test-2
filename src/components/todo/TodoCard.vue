<template>
  <div
    class="group list-box cursor-pointer rounded-lg p-3 flex justify-between items-center h-[7vh] my-3 hover:bg-[#C7FFD8] shadow relative overflow-hidden"
    :class="item?.completed? 'bg-[#C7FFD8]':'bg-[#fff]'">
    <div class="flex items-center" @click="todo[id].completed=!todo[id].completed">
      <svg v-if="item?.completed" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0B2F9F" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
      </svg>
      <svg v-else class="w-6 h-6 fill-[#f5f5f5] group-hover:fill-[#98DED9]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <circle r="9" cx="12" cy="12" />
      </svg>
      <h3 v-if="!item?.editing" class="ml-2">{{ item?.title }}</h3>
      <input v-else v-model="item.title" class="ml-2 p-2 border-1 border-[#ccc] rounded outline-0" @keyup.enter="todo[id].editing=false;"/>
    </div>
    <svg v-if="!item?.expanded" class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#161D6F" viewBox="0 0 24 24" @click="todo[id].expanded=true">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01"/>
    </svg>
    <div
      class="transition-all flex gap-4 absolute"
      :class="item?.expanded? 'right-2':'right-[-300px]'">
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" @click="todo[id].editing = !todo[id].editing;">
        <path fill-rule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clip-rule="evenodd"/>
      </svg>
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" @click="remove(id)">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
      </svg>
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" @click="todo[id].expanded=false; todo[id].editing=false">
        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  item: {
    type: Object,
    default() {
      return {}
    }
  }
});
const { todo } = storeToRefs(todoStore);

const remove = (id:any) => {
  todoStore.removeTodo(id);
}
</script>
