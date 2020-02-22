import React from 'react';
import { Icon } from 'antd';

const KeySvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="6"
      viewBox="0 0 15 6"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#8D8D8D" fillRule="nonzero" transform="translate(-996 -491)">
          <g transform="translate(995.5 486)">
            <path d="M3.5 10a2 2 0 11-.001-3.999A2 2 0 013.5 10M15 7.5H6.455A2.994 2.994 0 003.5 5c-1.655 0-3 1.345-3 3s1.345 3 3 3c1.486 0 2.72-1.08 2.955-2.5H11v2a.501.501 0 001 0v-2h1.5v1a.501.501 0 001 0v-1h.5a.501.501 0 000-1"></path>
          </g>
        </g>
      </g>
    </svg>
  );

const KeyIcon = props => <Icon component={KeySvg} {...props} />;


export default KeyIcon;
