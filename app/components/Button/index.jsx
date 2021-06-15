import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({ extend, size, ...rest }) => (
  <S.Button extend={extend} size={size} {...rest} />
);

Button.propTypes = {
  extend: PropTypes.bool,
  rest: PropTypes.shape(),
  size: PropTypes.string,
};

Button.defaultProps = {
  extend: false,
  rest: {},
  size: "small",
};

export default Button;
