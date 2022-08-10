import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { item, loading, error, sincronizedItem } = state;

  const onError = (error) =>
    dispatch({ type: [actionTypes.error], payload: error });
  const onSuccess = (parsedItem) =>
    dispatch({ type: [actionTypes.success], payload: parsedItem });
  const onSave = (newItem) =>
    dispatch({ type: [actionTypes.save], payload: newItem });
  const onSincronize = () => dispatch({ type: [actionTypes.sincronize] });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue; //Hay que darle un estado por defecto a la aplicación, por ende si no hay nada en localstorage pasamos array vacío.
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  //Para persistir la información cuando se complete o borre un elem.
  const saveItem = (newItem) => {
    try {
      const strg = JSON.stringify(newItem);
      localStorage.setItem(itemName, strg);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };
  

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
  sincronizedItem: true,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    error: false,
    loading: false,
    sincronizedItem: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type];
};

export { useLocalStorage };
