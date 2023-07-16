import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';

const StyledTodoList = styled.section`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

// const {...props} = props;
function TodoList({ todoItems, callbackDoneToggle }) {
  // 이벤트 핸들러 작성.
  const handlerDoneToggle = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    const id = Number(e.target.dataset.id); // data-id. Number() : 문자열을 숫자로 변환
    const item = JSON.parse(e.target.dataset.item); // data-item

    // 부모 컴포넌트의 콜백 메서드 callbackDoneToggle 호출
    callbackDoneToggle(id);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  const lis =
    todoItems &&
    todoItems.length &&
    todoItems.map((item) => {
      return (
        <li
          key={item.id}
          className={item.done ? 'checked' : null}
          data-id={item.id}
          data-item={JSON.stringify(item)}
          onClick={handlerDoneToggle}
        >
          <i aria-hidden="true" className="checkBtn fas fa-check"></i>
          {item.todo}
          <span type="button" className="removeBtn">
            <i aria-hidden="true" className="far fa-trash-alt"></i>
          </span>
        </li>
      );
    });

  return (
    <StyledTodoList>
      <ul>{lis}</ul>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackDoneToggle: PropTypes.func.isRequired,
  todoItems: PropTypes.arrayOf(PropTypes.object),
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackDoneToggle: () => {},
  todoItems: [],
};

export default TodoList; // React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
