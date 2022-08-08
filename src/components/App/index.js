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

function App() {
  const {state, stateUpdaters} = useWish();
  const { 
    // item,
    loading,
    error,
    searchedTodos,
    itemTotal,
    itemCompleted,
    searchValue,
    openItemModal,
    openCategModal,
    CATEGORIES,
    category,
    addCategory,
    categorieValue,
    // categoriesCompleted,
  } = state;
  const {add,
    toggleCompletedTodos,
    setSearchValue,
    deleteTodo,
    sincronizeItem,
    setOpenItemModal,
    setOpenCategModal,
    // progressColor,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <Header loading={loading}>
        <Title />
        <Counter total={itemTotal} completed={itemCompleted} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <Categorie
        CATEGORIES={CATEGORIES}
        category={category}
        setOpenCategModal={setOpenCategModal}
        render={(cat) => (
          <CategorieItems
            key={cat.title}
            title={cat.title}
            count={cat.count}
            // item={item}
            // progress={categoriesCompleted(cat.count,item,cat.title)}
            // progressColor={progressColor(cat.title)}
            />
        )}
      ></Categorie>

      <List
        //primero validaciones
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
            onComplete={() => toggleCompletedTodos(task.text)}
            onDelete={() => deleteTodo(task.text)}
            categories={task.categorie}
          />
        )}
      >
        {<CreateButton setOpenItemModal={setOpenItemModal} />}
      </List>

      {openItemModal && (
        <ItemModal>
          <FormItem
            add={add}
            setOpenItemModal={setOpenItemModal}
            setSearchValue={setSearchValue}
            categories={categorieValue}
          />
        </ItemModal>
      )}
      {openCategModal && (
        <CategoryModal>
          <FormCategory category={category} addCategory={addCategory} />

        </CategoryModal>
      )}
      <ChangeAlert sincronize={sincronizeItem} />
    </React.Fragment>
  );
}

export default App;
