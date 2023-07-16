import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// 스타일을 위한 컴포넌트
const StyledCompStyle = styled.div`
  /* &로 자기 자신을 나타내고 삼항연산자, &&, || 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
  .App {
    display: inline-block;
    background-color: gray;
    border: 10px solid black;
    height: 63px;
    width: 300px;
  }
`;

const StyledCircle = styled.div`

  &:hover {
    color: red; // <Thing> when hovered
  }

  /* &로 자기 자신을 나타내고 삼항연산자, &&,|| 문을 쓸수 있다
   * 스타일 설정: https://styled-components.com/docs/basics#adapting-based-on-props
   * 스타일 상속: https://velog.io/@hwang-eunji/Styled-Components-리액트-스타일-컴포넌트
   */
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || 'black'};
  border-radius: 50%;
  margin: auto;

  ${(props) =>
    props.isHuge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

// const {...props} = props;
function CompStyle({ ...props }) {
  return (
    <StyledCompStyle>
      <h2>styled-components 로 만든</h2>

      <div className="App">styled-components 스타일로 만든</div>
      <hr />

      <StyledCircle></StyledCircle>
      <hr />

      <StyledCircle color={'blue'}></StyledCircle>
      <hr />

      <StyledCircle color={'red'} isHuge={true}></StyledCircle>
      <hr />
    </StyledCompStyle>
  );
}

CompStyle.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CompStyle.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default CompStyle; // React.memo(CompStyle); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
