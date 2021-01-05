import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }){
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    if(text.length > 0) addToDo(text);
    else alert("내용을 입력해 주세요!");
  };

  return (
    <>
      <h1> To Do </h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="입력해 주세요" value={text} onChange={onChange} />
        <button> 추가하기 </button>
      </form>
      <ul> 
        { toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id}/>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state){
  return { toDos: state };
};

function mapDispatchToProps(dispatch){
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);