import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useWish() {
  const { item, saveItem, sincronizeItem, loading, error } = useLocalStorage(
    "WISHLIST_V1",
    []
  ); //primero el elemento (item), segundo la actualización del mismo (saveItem).

  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const totalPersonal = item.filter(
    (item) => item.categorie === "personal"
  ).length;
  const totalBusiness = item.filter(
    (item) => item.categorie === "business"
  ).length;
  const CATEGORIES = [
    {
      title: "personal",
      count: totalPersonal,
    },
    {
      title: "business",
      count: totalBusiness,
    },
  ];

  const itemCompleted = item.filter((todo) => !!todo.completed).length;
  const itemTotal = item.length;
  let searchedTodos = [];

  const progressColor = (title) => {
    let className = "";
    title === "personal"
      ? (className = "progressBar-personal")
      : (className = "progressBar-business");
    return className;
  };

  const categoriesCompleted = (cantItems, item, title) => {
    const cantCompleted = item.filter(
      (i) => i.completed && i.categorie === title
    ).length;
    const progress = (cantCompleted * 100) / cantItems;
    return progress;
  };

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
  const toggleCompletedTodos = (text) => {
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

  const state = {
    item,
    loading,
    error,
    searchedTodos,
    itemTotal,
    itemCompleted,
    searchValue,
    openModal,
    CATEGORIES,
    categorieValue,
    categoriesCompleted,

  }
  const stateUpdaters = {
    add,
    toggleCompletedTodos,
    setSearchValue,
    deleteTodo,
    sincronizeItem,
    setOpenModal,
    progressColor,

  }


  return { state, stateUpdaters  };
}

export { useWish };
