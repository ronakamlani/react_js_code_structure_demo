import React from 'react';
import { Icon } from 'antd';

const UserSvg = () => (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero" transform="translate(-995 -403)">
          <g transform="translate(995.5 403)">
            <path
              fill="#FFF"
              d="M15.068 13.494a7.643 7.643 0 00-1.644-2.438A7.643 7.643 0 0010 9.072c.5-.231.96-.552 1.361-.953a4.719 4.719 0 001.392-3.358 4.719 4.719 0 00-1.392-3.359A4.719 4.719 0 008.002.011a4.719 4.719 0 00-3.359 1.391 4.719 4.719 0 00-1.391 3.359c0 1.268.494 2.461 1.391 3.358.401.401.862.722 1.361.953a7.643 7.643 0 00-3.425 1.984 7.642 7.642 0 00-2.23 4.936h.715c.251-3.608 3.267-6.468 6.938-6.468 3.67 0 6.687 2.86 6.937 6.468h.716a7.6 7.6 0 00-.587-2.498zM3.966 4.76A4.04 4.04 0 018.002.725a4.04 4.04 0 014.035 4.036 4.04 4.04 0 01-4.035 4.035 4.04 4.04 0 01-4.036-4.035z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
);

const UserIcon = props => <Icon component={UserSvg} {...props} />;

export default UserIcon;