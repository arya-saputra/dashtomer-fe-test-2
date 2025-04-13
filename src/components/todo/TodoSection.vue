<template>
  <div class="content pt-2 md:pt-9">
    <TodoWrapper v-if="todo?.length" />
    <TodoEmpty v-else />
  </div>
</template>
<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import TodoWrapper from "./TodoWrapper.vue";
import TodoEmpty from "./TodoEmpty.vue";

const todoStore = useTodoStore();
const { todo } = storeToRefs(todoStore);
</script>
