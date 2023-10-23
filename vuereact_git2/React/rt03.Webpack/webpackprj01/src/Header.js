import React from 'react';

// const {...props} = props;
function Header() {
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>Header.html</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
Header.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default Header;
