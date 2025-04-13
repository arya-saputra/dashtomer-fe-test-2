import { defineStore } from "pinia";

interface todoItem{
  id: number
  title: string
  completed: boolean
  editing: boolean
  expanded: boolean
};

export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      todo:[] as todoItem[],
      title:"",
      inputData: {} as todoItem
    }
  },
  actions: {
    addTodo() {
      this.todo.splice(0,0, this.inputData);
      this.title = "";
    },
    removeTodo (idx:any) {
      if (idx > -1) {
        this.todo.splice(idx,1);
      }
    },
    refresh() {
      this.todo.map((item:todoItem) => {
        item.expanded = false;
        item.editing = false;
      });
    }
  },
  persist: true,

})
