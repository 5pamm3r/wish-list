import React from "react";
import { Title } from "./Title";
import { Counter } from "./Counter";
import { Search } from "./Search";
import { List } from "./List";
import { Items } from "./Items";
import { CreateButton } from "./CreateButton";
import { Context } from "./Context/index";
import { Modal } from "./Modal/index";
import { Form } from "./Form";
import { Error } from "./Error";
import { Empty } from "./Empty";
import { Loading } from "./Loading";
import { Categories } from './Categories'

function AppUI() {
  //Obtenemos las props que vamos a necesitar. Alternativa a Consumers.
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  return (
    <React.Fragment>
      <Title />
      <Counter />

      <Search />
      <Categories />
      <List>
        {error && <Error error={error} />}
        {/* {loading && <Loading />} */}
        {loading &&
          new Array(3).fill(1).map((a, i) => <Loading key={i} />)}{" "}
        {/*para mostrar 3 */}
        {!loading && !searchedTodos.length && <Empty />}
        {searchedTodos.map((todo) => (
          <Items
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        <CreateButton setOpenModal={setOpenModal} />
      </List>

      {/*Si openModal es true, renderiza el modal. */}
      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
