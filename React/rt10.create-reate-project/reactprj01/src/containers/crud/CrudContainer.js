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

import CrudInput from './CrudInput';
import CrudList from './CrudList';

const StyledCrudContainer = styled.div`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
  .strong {
    color: red;
    font-weight: bold;
    font-size: 1.2em;
  }

  label {
    display: inline-block;
    width: 80px;
  }

  & > div {
    margin: 5px 0;
  }
`;

// const {...props} = props;
function CrudContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [items, setItems] = useState([
    { id: 1, name: '슈퍼맨', power: 100 },
    { id: 2, name: '아쿠아맨', power: 300 },
    { id: 3, name: '스파이더맨', power: 500 },
    { id: 4, name: '배트맨', power: 30 },
  ]); // 상태값이 기본타입인 경우

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudContainer >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.

  // items 배열에서 삭제하는 콜백 메서드 만들기. Array.filter() 를 사용한다
  const callbackDel = useCallback(
    (item) => {
      // ...생략
      debugger;
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // power를 100씩 증가 시키는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackUp = useCallback(
    (item) => {
      // ...생략
      debugger;
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // power를 50씩 감소 시키는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackDown = useCallback(
    (item) => {
      // ...생략
      debugger;
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 새로운 값으로 수정하는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackSave = useCallback(
    (newitem) => {
      // ...생략
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 새로운 값을 추가하는 콜백 메서드 만들기.
  // Array에서  Array.map()과 Array.reduce()를 사용하여 max id 구하기
  const callbackAdd = useCallback(
    (newitem) => {
      // ...생략
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCrudContainer id="app">
      <h1>Creat Read Update Delete</h1>
      <CrudInput></CrudInput>
      <hr />
      <CrudList
        items={items}
        callbackDel={callbackDel}
        callbackUp={callbackUp}
        callbackDown={callbackDown}
        callbackSave={callbackSave}
      ></CrudList>
    </StyledCrudContainer>
  );
}

CrudContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CrudContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default CrudContainer; // React.memo(CrudContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
