import React, { useEffect } from "react";
import "./List.css";

function List(props) {
  useEffect(()=>{
    const textarea = document.querySelectorAll('.item__textarea')
    if(textarea.length>0){
      const arr = [...textarea]
      arr.map(e=>
        e.style.height = `${e.scrollHeight}px`
      )
    }
  },[props.item])
  
  return (
    <section className="list__container">
      <h2 className="list__title">TODAY'S TASKS</h2>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.itemTotal && props.onEmpty()}
        {(!!props.itemTotal && !props.searchedTodos.length) && props.onEmptySearchResults()}
        {(!props.loading && !props.error) && props.searchedTodos.map(props.render)} 
        {props.children}
      </ul>
    </section>
  );
}

export { List };
