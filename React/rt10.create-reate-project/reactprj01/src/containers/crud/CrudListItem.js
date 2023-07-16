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

const StyledCrudListItem = styled.tr`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
`;

// const {...props} = props;
function CrudListItem({
  item,
  callbackDel,
  callbackUp,
  callbackDown,
  callbackSave,
}) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudListItem >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudListItem >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudListItem >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handlerDel = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // 부모의 콜백 메서드 호출.
    // CrudContainer.callbackDel();
    callbackDel(item);
  };
  const handlerUp = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // 부모의 콜백 메서드 호출.
    // CrudContainer.callbackUp();
    callbackUp(item.id);
  };
  const handlerDown = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // 부모의 콜백 메서드 호출.
    // CrudContainer.callbackDown();
    callbackDown(item.id);
  };
  const handlerEdit = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  let strong = '';
  if (item.power >= 300) strong = 'strong';

  return (
    <StyledCrudListItem className={strong}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.power}</td>
      <td>
        <button type="button" onClick={handlerDel}>
          Del
        </button>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerEdit}>
          Edit
        </button>
      </td>
    </StyledCrudListItem>
  );
}

CrudListItem.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object.isRequired,
  callbackDel: PropTypes.func.isRequired,
  callbackUp: PropTypes.func.isRequired,
  callbackDown: PropTypes.func.isRequired,
  callbackSave: PropTypes.func.isRequired,
};
CrudListItem.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  item: {},
  callbackDel: () => {},
  callbackUp: () => {},
  callbackDown: () => {},
  callbackSave: () => {},
};

export default CrudListItem; // React.memo(CrudListItem); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
