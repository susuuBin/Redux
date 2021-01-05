import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}> 제거하기 </button> 
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onBtnClick: () => dispatch(actionCreators.delToDo(ownProps.id))
  }
};

export default connect(null, mapDispatchToProps)(ToDo);