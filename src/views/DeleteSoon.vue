<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

interface todoItem{
  id: number
  title: string
  completed: boolean
  editing: boolean
  expanded: boolean
};

const todo = ref<todoItem[]>([]);
const title = ref("");
const editTodo = ref("");

const addTodo = () => {
  todo.value.splice(0,0,
    { id: todo.value.length + 1, title: title.value, completed:false, expanded: false, editing: false}
  );
  title.value = "";
};

const removeTodo = (idx:any) => {
  if (idx > -1) { // only splice array when item is found
    todo.value.splice(idx,1);
  }
}
</script>

<template>
  <section class="w-full md:w-[480px] mx-auto overflow-y-scroll h-screen bg-[#fafafa] relative">
    <header class="header w-full absolute flex justify-center border-[#fafafa] shadow md:text-[40px] items-center bg-[white] h-[60px] ">
      TODO APP
    </header>
    <section class="body pt-[4rem] min-h-screen">
      <div class="form-section h-[20vh] flex justify-center items-center bg-[#161D6F]">
        <div class="input-group flex overflow-hidden rounded-lg w-[90%] justify-center items-center mx-auto bg-[#98DED9] shadow-lg">
          <input type="text" class="w-[90%] border-0 p-[1.2rem] text-[18px] outline-0 bg-[white] placeholder:text-[#fafafa]" placeholder="type your activity then press Enter" v-on:keyup.enter="addTodo" v-model="title" />
          <button class="w-[20%] text-[#0B2F9F] text-[25px] md:text-[42px] border-0 h-full bg-[#98DED9] cursor-pointer h-full" @click="addTodo">+</button>
        </div>
      </div>

      <div class="content pt-2 md:pt-9">
        <div v-if="todo?.length" class="list wrapper h-[fit-content] max-h-[66vh] overflow-y-scroll rounded-l-[30px] px-4 ">
          <div
            v-for="(item,id) in todo"
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
              <input v-else v-model="item.title" class="ml-2 p-2 border-1 border-[#ccc] rounded outline-0" @keyup.enter="todo[id].editing=false; item.title = editTodo"/>
            </div>
            <svg v-if="!item?.expanded" class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#161D6F" viewBox="0 0 24 24" @click="todo[id].expanded=true">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01"/>
            </svg>
            <div
              class="transition-all flex gap-4 absolute"
              :class="item?.expanded? 'right-2':'right-[-300px]'">
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" @click="todo[id].editing = !todo[id].editing; editTodo=item.title">
                <path fill-rule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clip-rule="evenodd"/>
              </svg>
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" @click="removeTodo(id)">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" @click="todo[id].expanded=false; todo[id].editing=false">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="h-[30vh] flex items-center justify-center text-[#ccc]" v-else>
          No items available
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
