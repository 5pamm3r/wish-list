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
  } = useWish();

  return (
    <React.Fragment>
      <Header loading={loading}>
        <Title />
        <Counter
          total={itemTotal}
          completed={itemCompleted}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

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
            onComplete={() => toggleCompleteTodos(task.text)}
            onDelete={() => deleteTodo(task.text)}
          />
        )}
      >
        {<CreateButton setOpenModal={setOpenModal} />}
      </List>

      {/*Si openModal es true, renderiza el modal. */}
      {openModal && (
        <Modal>
          <Form
            add={add}
            setOpenModal={setOpenModal}
            setSearchValue={setSearchValue}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
