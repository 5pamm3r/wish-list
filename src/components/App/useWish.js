import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useWish() {
  const { item, saveItem, sincronizeItem, loading, error } = useLocalStorage(
    "WISHLIST_V1",
    []
  ); //primero el elemento (item), segundo la actualización del mismo (saveItem).

  const [searchValue, setSearchValue] = React.useState(""); //Para agregar estados. Entre comillas el valor inicial.

  const [openModal, setOpenModal] = React.useState(false); //Por defecto el modal debe estar cerrado.

  const itemCompleted = item.filter((todo) => !!todo.completed).length; //!!todo.completed = todo.completed == true.
  const itemTotal = item.length;
  let searchedTodos = [];

  const progressColor = (title) => {
    let className = ''
    title==='personal'?className='progressBar-personal':className='progressBar-business'
    return className
  }

  const categoriesCompleted = (cantItems, item, title) => {
      const cantCompleted = item.filter((i)=>i.completed && i.categorie===title).length
      const progress = (cantCompleted * 100) / cantItems
      return progress
  }
  const totalPersonal = item.filter(
    (item) => item.categorie === "personal"
  ).length;
  const totalBusiness = item.filter(
    (item) => item.categorie === "business"
  ).length;
  const categories = [
    {
      title: "personal",
      count: totalPersonal,
    },
    {
      title: "business",
      count: totalBusiness,
    },
  ];


  
  let categorieValue = "";

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
  const add = (text, categorie) => {
    const newTodos = [...item];
    categorieValue = categorie;
    newTodos.push({
      completed: false,
      text,
      categorie: categorie,
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
    sincronizeItem,
    categorieValue,
    categories,
    categoriesCompleted,
    item,
    progressColor,
  };
}

export { useWish };
