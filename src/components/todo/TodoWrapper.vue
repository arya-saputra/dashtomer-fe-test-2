<template>
  <div v-if="todo?.length" class="list wrapper h-[fit-content] max-h-[66vh] overflow-y-scroll rounded-l-[30px] px-4 ">
    <TodoCard v-for="(item, id) in todo" :item="item" :id="id" />
  </div>
</template>
<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import TodoCard from "./TodoCard.vue";

const todoStore = useTodoStore();
const { todo } = storeToRefs(todoStore);
</script>
