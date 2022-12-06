import React, { useEffect, useState } from "react";
import useCategoryLocalStorage from "./useCategoryLocalStorage";
import { useLocalStorage } from "./useLocalStorage";

function useWish() {
  const { item, saveItem, sincronizeItem, loading, error } = useLocalStorage(
    "WISHLIST_V1",
    []
  );
  const { category, saveCategory, catLoading, catError, sincronizeCategory } =
    useCategoryLocalStorage("WISHLIST-CAT_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openItemModal, setOpenItemModal] = React.useState(false);
  const [openCategModal, setOpenCategModal] = React.useState(false);
  const [newValue, setNewValue] = React.useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  let searchedTodos = [];

  const itemCompleted = item.filter((todo) => !!todo.completed).length;
  const itemTotal = item.length;

  const categoryTotalCompleted = (cantItems, item, title) => {
    const cantCompleted = item.filter(
      (i) => i.completed && i.category === title
    ).length;
    const progress = (cantCompleted * 100) / cantItems;
    return progress;
  };

  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const add = (text, categoryName, categoryColor) => {
    const newTodos = [...item];
    newTodos.unshift({
      completed: false,
      text: text,
      category: categoryName,
      categoryColor: categoryColor,
    });
    saveItem(newTodos);
  };
  const addCategory = (categoryName, color) => {
    const newCategory = [...category];
    newCategory.push({
      title: categoryName,
      count: 0,
      color: color,
    });
    saveCategory(newCategory);
  };
  const totalItemCategory = (title) => {
    const totalItem = item.filter((e) => e.category === title).length;
    return totalItem;
  };

  const toggleCompletedTodos = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    setTimeout(()=>{

      const todoIndex = item.findIndex((todo) => todo.text === text);
      const newTodos = [...item];
      newTodos.splice(todoIndex, 1);
      saveItem(newTodos);
    },1000)
  };
  const deleteCategory = (categoryName) => {
    const index = category.findIndex((cat) => cat.title === categoryName);
    const newCategory = [...category];
    newCategory.splice(index, 1);
    saveCategory(newCategory);
  };
  const deleteAllItemCategory = (categoryName) => {
    const newItems = item.filter(e=>e.category !== categoryName)
    saveItem(newItems)
  }

  const state = {
    item,
    loading,
    error,
    searchedTodos,
    itemTotal,
    itemCompleted,
    searchValue,
    openItemModal,
    openCategModal,
    category,
    addCategory,
    newValue,
    categoryName,
    categoryColor,
  };
  const stateUpdaters = {
    add,
    toggleCompletedTodos,
    setSearchValue,
    deleteTodo,
    sincronizeItem,
    setOpenItemModal,
    setOpenCategModal,
    setNewValue,
    deleteCategory,
    setCategoryName,
    setCategoryColor,
    categoryTotalCompleted,
    totalItemCategory,
    deleteAllItemCategory,
  };

  return { state, stateUpdaters };
}

export { useWish };
