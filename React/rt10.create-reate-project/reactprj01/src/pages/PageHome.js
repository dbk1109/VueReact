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

import CompStyle from '../containers/styled/CompStyle';
import CurdContainer from '../containers/crud/CrudContainer';
import TodoContainer from '../containers/todo/TodoContainer';
import HomeContainer from '../containers/home/HomeContainer';

const StyledPageHome = styled.div`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
  & > ul > li {
    display: inline-block;
    padding: 20px 40px;
  }
  .active {
    background-color: aqua;
  }
  .inactive {
    background-color: none;
  }
`;

// const {...props} = props;
function PageHome({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledPageHome>
      <ul>
        <li>
          <NavLink to={'/'}>home</NavLink>
        </li>
        <li>
          <NavLink to={'/style'}>style</NavLink>
        </li>
        <li>
          <NavLink to={'/crud'}>crud</NavLink>
        </li>
        <li>
          <NavLink to={'/todo'}>todo</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path={'/style'} element={<CompStyle></CompStyle>}></Route>
        <Route path={'/crud'} element={<CurdContainer></CurdContainer>}></Route>
        <Route path={'/todo'} element={<TodoContainer></TodoContainer>}></Route>
        <Route path={'/'} element={<HomeContainer></HomeContainer>}></Route>
        <Route path={'*'} to={'/'}></Route>
      </Routes>
    </StyledPageHome>
  );
}

PageHome.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
PageHome.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default PageHome; // React.memo(PageHome); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
