import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import CompStyle from './containers/styled/CompStyle';
import CrudContainer from './containers/crud/CrudContainer';

const StyledApp = styled.div`
  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
  ul > li {
    display: inline-block;
    padding: 20px 40px;
  }
`;

function App() {
  return (
    <StyledApp>
      <ul>
        <li>
          <NavLink to="/style">style</NavLink>
        </li>
        <li>
          <NavLink to="/crud">crud</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/style" element={<CompStyle />}></Route>
        <Route path="/crud" element={<CrudContainer />}></Route>
        <Route path="/" element={<CrudContainer />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
