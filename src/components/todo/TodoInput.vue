<template>
  <div class="form-section h-[20vh] flex justify-center items-center bg-[#161D6F]">
    <div class="input-group flex overflow-hidden rounded-lg w-[90%] justify-center items-center mx-auto bg-[#98DED9] shadow-lg">
      <input type="text" class="w-[90%] border-0 p-[1.2rem] text-[18px] outline-0 bg-[white] placeholder:text-[#fafafa]" placeholder="type your activity then press Enter" v-on:keyup.enter="addTodo" v-model="title" />
      <button class="w-[20%] text-[#0B2F9F] text-[10vw] md:text-[42px] border-0 h-full bg-[#98DED9] cursor-pointer h-full" @click="addTodo">+</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { title, inputData } = storeToRefs(todoStore);

const addTodo = () => {
  inputData.value = {
    title: title.value,
    id: Math.random()*999,
    completed: false,
    editing: false,
    expanded: false
  };
  todoStore.addTodo();
}
</script>
