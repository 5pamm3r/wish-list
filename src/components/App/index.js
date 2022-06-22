import React from "react";
import { useWish } from "./useWish";
import { Title } from "../Title";
import { Counter } from "../Counter";
import { Search } from "../Search";
import { List } from "../List";
import { Items } from "../Items";
import { CreateButton } from "../CreateButton";
import { Modal } from "../Modal/index";
import { Form } from "../Form";
import { Error } from "../Error";
import { Empty } from "../Empty";
import { Loading } from "../Loading";
import { Header } from "../Header";
import { EmptySearchResults } from "../EmptySearchResults";
import { ChangeAlert } from "../StorageChangeAlert";
import { Categorie } from "../Categorie";
import { CategorieItems } from "../CategorieItems";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    itemTotal,
    itemCompleted,
    searchValue,
    setSearchValue,
    add,
    sincronizeItem,
    categorieValue,
    CATEGORIES,
    categoriesCompleted,
    item,
    progressColor,
    // categItem,
    // filterResult
  } = useWish();

  return (
    <React.Fragment>
      <Header loading={loading}>
        <Title />
        <Counter total={itemTotal} completed={itemCompleted} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <Categorie
        CATEGORIES={CATEGORIES}
        render={(cat) => (
          <CategorieItems
            key={cat.title}
            title={cat.title}
            count={cat.count}
            item={item}
            progress={categoriesCompleted(cat.count,item,cat.title)}
            progressColor={progressColor(cat.title)}
            // filterResult={filterResult(cat.title)}
          />
        )}
      ></Categorie>

      <List
        //primero validaciones
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        itemTotal={itemTotal}
        // categItem={categItem}
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
            onComplete={() => toggleCompleteTodos(task.text)}
            onDelete={() => deleteTodo(task.text)}
            categories={task.categorie}
          />
        )}
      >
        {<CreateButton setOpenModal={setOpenModal} />}
      </List>

      {openModal && (
        <Modal>
          <Form
            add={add}
            setOpenModal={setOpenModal}
            setSearchValue={setSearchValue}
            categories={categorieValue}
          />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizeItem} />
    </React.Fragment>
  );
}

export default App;
