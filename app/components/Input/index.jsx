import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Input = (props, ref) => <S.Input {...props} ref={ref} />;

Input.propTypes = {
  props: PropTypes.shape(),
  ref: PropTypes.shape(),
};

Input.defaultProps = {
  props: {},
};
export default React.forwardRef(Input);
