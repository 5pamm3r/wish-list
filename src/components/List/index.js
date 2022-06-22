import React from "react";
import "./List.css";

function List(props) {

  
  return (
    <section className="list__container">
      <h2 className="list__title">TODAY'S TASKS</h2>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.itemTotal && props.onEmpty()}
        {(!!props.itemTotal && !props.searchedTodos.length) && props.onEmptySearchResults()}

        {/* {props.categItem.map(props.render)} */}

        {(!props.loading && !props.error) && props.searchedTodos.map(props.render)} 
        {props.children}
      </ul>
    </section>
  );
}

export { List };
