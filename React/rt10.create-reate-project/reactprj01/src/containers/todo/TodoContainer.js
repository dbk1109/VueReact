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

import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const StyledTodoContainer = styled.div`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */

  & * {
    box-sizing: border-box;
  }

  & {
    text-align: center;
    /* background-color: #f6f6f8; */
  }
`;

// const {...props} = props;
function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: '영화보기', done: false },
    { id: 2, todo: '주말 산책', done: true },
    { id: 3, todo: 'ES6 학습', done: false },
    { id: 4, todo: '잠실 야구장', done: false },
  ]);

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('TodoContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('TodoContainer >> componentDidMount');
        refIsMounted.current = true;

        // todo 실행되는 경우에만 배경색 변경
        document.body.style.backgroundColor = '#f6f6f8';
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('TodoContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callbackClearAll = useCallback(
    (param) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      debugger;
      setTodoItems([]); // todoItems = [];
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackDoneToggle = useCallback(
    (id) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      debugger;
      const newTodos =
        todoItems &&
        todoItems.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });

      setTodoItems(newTodos); // todoItems = newTodos;
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackRemoveTodo = useCallback(
    (id) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      debugger;
      const newTodos =
        todoItems &&
        todoItems.filter((item) => {
          if (item.id === id) {
            return false;
          }
          return true;
        });

      setTodoItems(newTodos); // todoItems = newTodos;
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackAddTodo = useCallback(
    (value) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      debugger;

      // map과 reduce 를 사용하여 max id 구하기 ==> newid 만들기
      // todoItems 추가할 객체 만들기
      // 배열에 추가. todoItems = [...todoItems, newTodo];
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer id="app">
      {/* <!-- TodoHeader --> */}
      <TodoHeader></TodoHeader>

      {/* <!-- TodoInput --> */}
      <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>

      {/* <!-- TodoList --> */}
      <TodoList
        todoItems={todoItems}
        callbackDoneToggle={callbackDoneToggle}
        callbackRemoveTodo={callbackRemoveTodo}
      ></TodoList>
      {/* <!-- TodoFooter --> */}
      <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default TodoContainer; // React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
