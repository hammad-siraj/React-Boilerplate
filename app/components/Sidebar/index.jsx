import React, { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

import { ITEMS } from "./constants";
import * as S from "./styled";

const ItemLink = ({ label, url }) => (
  <S.Item as={NavLink} exact to={url}>
    {label}
  </S.Item>
);

const ItemCollapse = ({ childs, label, url }) => {
  const match = useRouteMatch(url);
  const [collapse, setCollapse] = useState(!!match);

  return (
    <>
      <S.Item onClick={() => setCollapse(!collapse)}>{label}</S.Item>
      {collapse && (
        <ul>
          {childs.map((child) => (
            <li key={child.url}>
              <S.Item $isChild as={NavLink} exact to={`${url}${child.url}`}>
                {child.label}
              </S.Item>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Sidebar = () => (
  <S.Sidebar>
    <ul>
      {ITEMS.map((item) => (
        <li key={item.url}>
          {item.childs ? <ItemCollapse {...item} /> : <ItemLink {...item} />}
        </li>
      ))}
    </ul>
  </S.Sidebar>
);

ItemCollapse.propTypes = {
  childs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
  ),
  label: PropTypes.string,
  url: PropTypes.string,
};

ItemLink.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};

ItemCollapse.defaultProps = {
  childs: [],
  label: "",
  url: "",
};

ItemLink.defaultProps = {
  label: "",
  url: "",
};

export default Sidebar;
