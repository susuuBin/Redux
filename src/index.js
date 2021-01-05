import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
};

const delToDo = (id) => {
  return {
    type: DEL_TODO,
    id
  }
};

/* reducer 생성 */
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DEL_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

/* 이들을 함께 가지고 오는 객체 Store */
const store = createStore(reducer);

/* 상태를 수정할 수 있게 하는 dispatch */
const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDelToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(delToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "제거";
    button.addEventListener("click", dispatchDelToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(button);
    ul.appendChild(li);
  })
};

/* 이벤트를 동록해 주는 subscribe */
store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);