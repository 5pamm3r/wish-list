import { useEffect, useReducer } from 'react'

function useCategoryLocalStorage(itemCategory, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue}));
  const { category, catLoading, catError, sincronizedCategory } = state;

  const onError = (catError) => dispatch({ type: [actionTypes.catError], payload: catError})
  const onSucces = (parsedCategory) => dispatch({ type: [actionTypes.success], payload: parsedCategory})
  const onSave = (newCategory) => dispatch({ type: [actionTypes.save], payload: newCategory})
  const onSincronize = () => dispatch({ type: [actionTypes.sincronize]})

  useEffect(()=> {
    setTimeout(()=>{
      try {

        const localStorageCategory = localStorage.getItem(itemCategory);
        let parsedCategory;
        if(!localStorageCategory) {
          localStorage.setItem(itemCategory, JSON.stringify(initialValue))
          parsedCategory = initialValue;
        } else {
          parsedCategory = JSON.parse(localStorageCategory)
        }
        onSucces(parsedCategory)
      }catch (Error) {
        onError(Error)
      }
    }, 1000) 
  }, [sincronizedCategory])

  const saveCategory = (newCategory) => {
    try{
      const strg = JSON.stringify(newCategory);
      localStorage.setItem(itemCategory, strg);
      onSave(newCategory)
    } catch (Error) {
      onError(Error)
    }
  }

  const sincronizeCategory = () => {
    onSincronize()
  }


  return {
    category,
    saveCategory,
    catLoading,
    catError,
    sincronizeCategory
  }
}
const initialState = ({ initialValue }) => ({
  catError: false,
  catLoading: true,
  category: initialValue,
  sincronizedCategory: true
})
const actionTypes = {
  catError: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};
const reducerObject = (state, payload) => ({
  [actionTypes.catError]: {
    ...state,
    catError: true
  },
  [actionTypes.success]: {
    ...state,
    category: payload,
    catError: false,
    catLoading: false,
    sincronizedCategory: true
  },
  [actionTypes.save]: {
    ...state,
    category: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    catLoading: true,
    sincronizedCategory: false,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type]
}

export default useCategoryLocalStorage