import React from "react";
import { useWish } from "./useWish";
import { Title } from "../Title";
import { Counter } from "../Counter";
import { Search } from "../Search";
import { List } from "../List";
import { Items } from "../Items";
import { CreateButton } from "../CreateButton";
import { ItemModal } from "../Modals/itemModal";
import { FormItem } from "../Forms/formItem";
import { Error } from "../Error";
import { Empty } from "../Empty";
import { Loading } from "../Loading";
import { Header } from "../Header";
import { EmptySearchResults } from "../EmptySearchResults";
import { ChangeAlert } from "../StorageChangeAlert";
import { Categorie } from "../Categorie";
import { CategorieItems } from "../CategorieItems";
import { CategoryModal } from "../Modals/categoryModal";
import FormCategory from "../Forms/formCategory";
import AllCategoriesButtons from "../AllCategoriesButtons";

function App() {
  const {state, stateUpdaters} = useWish();
  const { 
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
  } = state;
  const {
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
  } = stateUpdaters;

  return (
    <React.Fragment>
      <Header loading={loading}>
        <Title />
        <Counter total={itemTotal} completed={itemCompleted} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <Categorie
        category={category}
        setOpenCategModal={setOpenCategModal}
        render={(cat) => (
          <CategorieItems
          key={cat.title}
          title={cat.title}
          color={cat.color}
          item={item}
          progress={categoryTotalCompleted(totalItemCategory(cat.title),item,cat.title)}
          totalItemCategory={totalItemCategory(cat.title)}
          deleteCategory={deleteCategory}
          deleteAllItemCategory={()=>deleteAllItemCategory(cat.title)}
            />
        )}
      ></Categorie>

      <List
        //primero validaciones
        item={item}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        itemTotal={itemTotal}
        //luego renderiza
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmpty={() => <Empty />}
        onEmptySearchResults={() => (
          <EmptySearchResults searchTxt={searchValue} />
        )}
        render={(task) => (
          <Items
            key={task.text}
            text={task.text}
            completed={task.completed}
            category={task.category}
            categoryColor={task.categoryColor}
            onComplete={() => toggleCompletedTodos(task.text)}
            onDelete={() => deleteTodo(task.text)}
          />
        )}
      >
        {<CreateButton setOpenItemModal={setOpenItemModal} />}
      </List>

      {openItemModal && (
        <ItemModal setOpenItemModal={setOpenItemModal}>
          <FormItem
            item={item}
            category={category}
            categoryName={categoryName}
            categoryColor={categoryColor}
            newValue={newValue}
            add={add}
            setOpenItemModal={setOpenItemModal}
            setSearchValue={setSearchValue}
            setNewValue={setNewValue}
            render={(cat)=>(
              <AllCategoriesButtons 
                key={cat.title}
                nameCategory={cat.title}
                color={cat.color}
                setCategoryName={setCategoryName}
                setCategoryColor={setCategoryColor}
              />
            )}
          />
        </ItemModal>
      )}
      {openCategModal && (
        <CategoryModal setOpenCategModal={setOpenCategModal}>
          <FormCategory category={category} addCategory={addCategory} setOpenCategModal={setOpenCategModal} />

        </CategoryModal>
      )}
      <ChangeAlert sincronize={sincronizeItem} />
    </React.Fragment>
  );
}

export default App;
