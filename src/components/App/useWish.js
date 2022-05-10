import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useWish() {
  const { item, saveItem, sincronizeItem, loading, error } = useLocalStorage("WISHLIST_V1", []); //primero el elemento (item), segundo la actualización del mismo (saveItem).

  const [searchValue, setSearchValue] = React.useState(""); //Para agregar estados. Entre comillas el valor inicial.

  const [openModal, setOpenModal] = React.useState(false); //Por defecto el modal debe estar cerrado.

  const itemCompleted = item.filter((todo) => !!todo.completed).length; //!!todo.completed = todo.completed == true.
  const itemTotal = item.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Guarda el nuevo array en localStorage y en estado global.
  const add = (text) => {
    const newTodos = [...item];
    newTodos.push({
      completed: false,
      text,
    });
    saveItem(newTodos);
  };
  const toggleCompleteTodos = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  return {
    loading,
    error,
    itemTotal,
    itemCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    add,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeItem
  };
}

export { useWish };
